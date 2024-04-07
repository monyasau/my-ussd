import { StatusBar, setStatusBarStyle } from "expo-status-bar";
import { Text, ScrollView, View, TouchableOpacity,Linking } from "react-native";
import Card from "./components/Card";
import CardToolBar from "./components/CardToolBar";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

export default function App() {
  const [aboutModalOpen, setAboutModalOpen] = useState(false);
  const switchAboutModal = () => setAboutModalOpen(!aboutModalOpen);
  const airtimeInfos=[
    { id: 1, name: 'Check account balance',code:"310" },
  { id: 2, name: 'Borrow airtime',code:"303" },
  { id: 3, name: 'Recharge airtime',code:"311" },
]
  const dataInfos=[
    { id: 1, name: 'Check data balance',code:"323" },
  { id: 2, name: 'Share data' ,code:"321"},
  { id: 3, name: 'Buy data',code:"312" },
  { id: 4, name: 'Special data bundle(MTN)',code:"121" },
  { id: 8, name: 'Night data plan(MTN)',code:"406*3" },
  { id: 5, name: 'Special data bundle(Glo)',code:"121" },
  { id: 6, name: 'Special data bundle(Airtel)',code:"121" },
  { id: 7, name: 'Special data bundle(9-Mobile)',code:"121" },
]
  const otherInfos=[
    { id: 1, name: 'Customer care service',code:300 },
    { id: 2, name: 'Link you NIN',code:"996" },
  { id: 3, name: 'Value added services',code:"305" },
]

  return (
    <>
      <View className="h-full justify-between bg-white">
        <View className="bg-green-600 p-5 pt-12">
          <Text className="">TOP NAVIGATION</Text>
        </View>
          {aboutModalOpen && <AboutModal active={aboutModalOpen} switchAboutModal={switchAboutModal} />}

        <View className="flex-grow py-5 bg-green-50">
          <View aria-label="Airtime services" className="mx-5 bg-green-100 rounded-xl">
          <Text className="mx-[10px] text-base">Airtime services</Text>
          <MainApp groupData={airtimeInfos}/>
          </View>
          <Line/>
          <View className="mx-5 bg-green-100" aria-label="Data services">
          <Text className="text-base mx-[10px]">Internet/Data Service</Text>
          <MainApp groupData={dataInfos}/>
          </View>
          <Line/>
          <View className="mx-5 bg-green-100 rounded-xl" aria-label="Other services">
            <Text className="mx-[10px] text-base">Other services</Text>
            <MainApp groupData={otherInfos}/>
          </View>

        </View>


        <BottomNavigation active={0} switchAboutModal={switchAboutModal} />
      </View>
      <StatusBar style="light" backgroundColor="#166534" />
    </>
  );
}
export function Line(){
  return(
    <View className="border-t border-green-400 my-5" aria-label="line">
    </View>
  )
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
export function MainApp({groupData}){

  return(
    <ScrollView horizontal>

    <View className="flex-row ">
      {
        groupData.map(item=>(
          <Box key={item.id} item={item}/>
          )
        )
        
      }
    </View>
      </ScrollView>
  )
}

export function Box({item}){
  const loadUssd=()=>{
    let ussdCode=`*${item.code}#`
    Linking.openURL(`tel:${ussdCode}`)
  }
  return(
    <TouchableOpacity onPress={loadUssd}>
<View key={item} className="w-[160px] bg-white rounded-xl p-3 h-[130px] m-[10]">
<Text className=" mx-auto text-center font-semibold">{item.name}</Text>
<Text className="text-base mx-auto my-auto">{"*"+item.code+"#"}</Text>
</View>
    </TouchableOpacity>
  )
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
