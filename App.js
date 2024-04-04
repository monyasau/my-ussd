import { StatusBar } from 'expo-status-bar';
import { Text, ScrollView, View } from 'react-native';
import Card from "./components/Card"


export default function App() {
  return (
    <ScrollView className="flex-1 flex-col bg-gray-900 px-4 py-6 ">
      <View className="">
      <Card/>
      </View>
      <StatusBar style="auto" />
    </ScrollView>
  );
}