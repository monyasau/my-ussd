import { StatusBar, setStatusBarStyle } from "expo-status-bar";
import {
  Text,
  ScrollView,
  View,
} from "react-native";
import { useState } from "react";
import BottomNavigation from "./components/BottomNavigation";
import AboutModal from "./components/AboutModal";
import { AirtimeCodes, DataCodes, OtherCodes } from "./lib/ussdCodes";
import ServicesGroup from "./components/ServicesGroup";
import RechargeModal from "./components/RechargeModal";
import ShareModal from "./components/ShareModal";

export default function App() {
  const [aboutModalOpen, setAboutModalOpen] = useState(false);
  const [rechargeModalOpen, setRechargeModalOpen] = useState(false);
  const [shareModalOpen, setShareModalOpen] = useState(false);
  const switchShareModal = () => setShareModalOpen(!shareModalOpen);
  const switchAboutModal = () => setAboutModalOpen(!aboutModalOpen);
  const switchRechargeModal = () => setRechargeModalOpen(!rechargeModalOpen);

  const otherInfos = [
    { id: 1, name: "Customer care service", code: 300 },
    { id: 2, name: "Link you NIN", code: "996" },
    { id: 3, name: "Value added services", code: "305" },
  ];

  return (
    <>
      <View className="h-full justify-between bg-white">
        <View className="bg-primary/10 p-5 pt-10">
          <Text className="text-sm text-primary">
            <Text className="font-bold ">MyUSSD</Text> - All your USSDs in one
            place
          </Text>
        </View>

        <ScrollView className="py-5">
          <ServicesGroup title="Airtime Services" data={AirtimeCodes} setRechargeModal={setRechargeModalOpen} setShareModal={setShareModalOpen} />
          <ServicesGroup title="Data Services" data={DataCodes} />
          <ServicesGroup title="Other Services" data={OtherCodes} />
        </ScrollView>

        {aboutModalOpen && (
          <AboutModal
          active={aboutModalOpen}
            switchAboutModal={switchAboutModal}
          />
        )}
        {rechargeModalOpen && (
          <RechargeModal
            switchRechargeModal={switchRechargeModal}
          />
        )}
        {shareModalOpen && (
          <ShareModal
            switchShareModal={switchShareModal} shareType={shareModalAction}
          />
        )}



        <BottomNavigation active={0} switchAboutModal={switchAboutModal} />
      </View>
      <StatusBar style="light" backgroundColor="#166534" />
    </>
  );

}