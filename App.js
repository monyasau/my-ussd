import { StatusBar, setStatusBarStyle } from "expo-status-bar";
import { Text, ScrollView, View, TouchableOpacity } from "react-native";
import Card from "./components/Card";
import CardToolBar from "./components/CardToolBar";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

export default function App() {
  const [aboutModalOpen, setAboutModalOpen] = useState(false);
  const switchAboutModal = () => setAboutModalOpen(!aboutModalOpen);

  return (
    <>
      <View className="h-full justify-between bg-white">
        <View className="bg-green-600 p-5 pt-12">
          <Text className="">TOP NAVIGATION</Text>
        </View>

        <View className="flex-grow p-5">
          <Text className="p">Hello, Naija!</Text>
          {aboutModalOpen && <AboutModal active={aboutModalOpen} switchAboutModal={switchAboutModal} />}
          <Text>{aboutModalOpen}</Text>
        </View>

        <BottomNavigation active={0} switchAboutModal={switchAboutModal} />
      </View>
      <StatusBar style="light" backgroundColor="#166534" />
    </>
  );
}

export function BottomNavigation({ active, switchAboutModal }) {
  const items = [
    {
      title: "Home",
      icon: "home-outline",
      action: () => {},
    },
    {
      title: "Search",
      icon: "search-outline",
      action: () => {},
    },
    {
      title: "About",
      icon: "settings-outline",
      action: () => {
        switchAboutModal();
      },
    },
  ];

  return (
    <View className="bg-green-100 flex-row justify-between border-t-2 border-green-200 px-5 py-2">
      {items.map((item, i) => (
        <TouchableOpacity
          key={i}
          onPress={item.action}
          className="justify-center items-center"
        >
          <Ionicons name={item.icon} size={20} color="#166534" />
          <Text className="text-center pt-1 text-[10px]">{item.title}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
export function AboutModal({ active,switchAboutModal }) {
  if (!active) {
    return null;
  }

  return (
    <View className="h-[250px] w-[300px] p-4 mx-auto my-auto justify-between rounded-xl border">
      <View className="flex-row items-center justify-between">

      <Text className="text-xl font-medium">About</Text>
      <TouchableOpacity onPress={()=>switchAboutModal()}>

      <Ionicons name="close" size={28}/>
      </TouchableOpacity>
      </View>
      <View className="my-3">
        <Text>App version: 1.0.0</Text>
      </View>
      <View className="my-">
        <Text>Developer: Olajide Olanrewaju</Text>
      </View>
    </View>
  );
}

// function __App() {
//   let dats = { title: "#100", content: "Price #100" };
//   return (
//     <ScrollView className="flex-col px-4  py-4">
//       <View className=" rounded-xl bg-gray-300  p-4">
//         <CardToolBar mainTitle={"Top up Airtime"} otherTitle={"More"} />
//         <View className="bordr flex-row flex-wrap justify-between items-center rounded-xl ">
//           <Card cardData={dats} />
//           <Card cardData={dats} />
//           <Card cardData={dats} />
//           <Card cardData={dats} />
//           <Card cardData={dats} />
//           <Card cardData={dats} />
//           <Card cardData={dats} />
//           <Card cardData={dats} />
//           <Card cardData={dats} />
//         </View>
//       </View>
//     </ScrollView>
//   );
// }
