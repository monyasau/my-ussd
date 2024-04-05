import { StatusBar } from 'expo-status-bar';
import { Text, ScrollView, View } from 'react-native';
import Card from "./components/Card"


export default function App() {
  let dats={title:"#100", content:"Price #100"}
  return (
    <ScrollView className="  px-4 py- ">
      <View className=" flex-row flex-wrap justify-center h-screen items-center space-x-2 rounded-xl  bg-black p-4 ">
        {/* <Text className="text-white">Top up A</Text> */}
      <Card cardData={dats}/>
      <Card cardData={dats}/>
      <Card cardData={dats}/>
      <Card cardData={dats}/>
      <Card cardData={dats}/>
      <Card cardData={dats}/>
      </View>
      <StatusBar style="auto" />
    </ScrollView>
  );
}