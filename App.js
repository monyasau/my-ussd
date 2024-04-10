import { StatusBar, setStatusBarStyle } from "expo-status-bar";
import {
  Text,
  ScrollView,
  View,
  TouchableOpacity,
  Linking,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import BottomNavigation from "./components/BottomNavigation";
import AboutModal from "./components/AboutModal";
import { AirtimeCodes } from "./lib/ussdCodes";
import ServicesGroup from "./components/ServicesGroup";

export default function App() {
  const [aboutModalOpen, setAboutModalOpen] = useState(false);
  const switchAboutModal = () => setAboutModalOpen(!aboutModalOpen);

  const airtimeInfos = [
    { id: 1, name: "Check account balance", code: "310" },
    { id: 2, name: "Borrow airtime", code: "303" },
    { id: 3, name: "Recharge airtime", code: "311" },
  ];
  const dataInfos = [
    { id: 1, name: "Check data balance", code: "323" },
    { id: 2, name: "Share data", code: "321" },
    { id: 3, name: "Buy data", code: "312" },
    // { id: 4, name: "Special data bundle(MTN)", code: "121" },
    // { id: 8, name: "Night data plan(MTN)", code: "406*3" },
    // { id: 5, name: "Special data bundle(Glo)", code: "301" },
    // { id: 6, name: "Special data bundle(Airtel)", code: "121" },
    // { id: 7, name: "Special data bundle(9-Mobile)", code: "121" },
  ];
  const otherInfos = [
    { id: 1, name: "Customer care service", code: 300 },
    { id: 2, name: "Link you NIN", code: "996" },
    { id: 3, name: "Value added services", code: "305" },
  ];

  return (
    <>
      <View className="h-full justify-between bg-white">
        <View className="bg-primary/10 p-5 pt-12">
          <Text className="text-sm text-primary">
            <Text className="font-bold">MyUSSD</Text> - All your USSDs in one
            place
          </Text>
        </View>

        <ScrollView className="py-5">
          <ServicesGroup title="Airtime Services" data={AirtimeCodes} />
          <ServicesGroup title="Data Services" data={AirtimeCodes} />
          <ServicesGroup title="Other Services" data={AirtimeCodes} />
        </ScrollView>

        {aboutModalOpen && (
          <AboutModal
            active={aboutModalOpen}
            switchAboutModal={switchAboutModal}
          />
        )}
        <BottomNavigation active={0} switchAboutModal={switchAboutModal} />
      </View>
      <StatusBar style="light" backgroundColor="#166534" />
    </>
  );
}
export function MainApp({ groupData }) {
  return (
    <ScrollView horizontal>
      <View className="flex-row ">
        {groupData.map((item) => (
          <Box key={item.id} item={item} />
        ))}
      </View>
    </ScrollView>
  );
}

export function Box({ item }) {
  const loadUssd = () => {
    let ussdCode = `*${item.code}#`;
    Linking.openURL(`tel:${ussdCode}`);
  };
  return (
    <TouchableOpacity onPress={loadUssd}>
      <View
        key={item}
        className="w-[160px] bg-white rounded-xl p-3 h-[130px] m-[10]"
      >
        <Text className=" mx-auto text-center font-semibold">{item.name}</Text>
        <Text className="text-base mx-auto my-auto">
          {"*" + item.code + "#"}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
