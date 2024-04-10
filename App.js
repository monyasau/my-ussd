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
import { AirtimeCodes, DataCodes, OtherCodes } from "./lib/ussdCodes";
import ServicesGroup from "./components/ServicesGroup";

export default function App() {
  const [aboutModalOpen, setAboutModalOpen] = useState(false);
  const switchAboutModal = () => setAboutModalOpen(!aboutModalOpen);

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
          <ServicesGroup title="Data Services" data={DataCodes} />
          <ServicesGroup title="Other Services" data={OtherCodes} />
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