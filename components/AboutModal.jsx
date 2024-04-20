import { Text, View, TouchableOpacity, Modal, Pressable, Linking } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { posthog } from "./Posthog";

export default function AboutModal({ active, switchAboutModal }) {
  if (!active) {
    return null;
  }

  return (
    <Modal transparent>
      <View className="h-full bg-black/50 p-4">
        <View className="bg-white w-[300px] p-4 mx-auto my-auto justify-between rounded-xl border-2">
          <TouchableOpacity
            onPress={() => switchAboutModal()}
            className="border border-white rounded-full bg-red-100 w-8 h-8 absolute right-0 -top-10 justify-center items-center"
          >
            <Ionicons name="close" size={20} />
          </TouchableOpacity>

          <Text className="text-center text-lg font-bold pb-5">MyUSSD</Text>
          <View className="text-center text-sm py-5 justify-center flex-row">
            <Text className="">

            Made with &hearts; by{" "}
            </Text>
            <TouchableOpacity className=" "><Text className="text-blue-700 font-semibold " onPress={()=>{Linking.openURL("https://monyasau.netlify.app");posthog.capture('Portfolio Clicked')}}>Olajide Olanrewaju</Text></TouchableOpacity>
          </View>
          <Text className="text-center text-xs">Version 1.0.0</Text>
          <Text className="text-center text-sm pt-2">
            Copyright &copy; 2024 
          </Text>
          <View>
            <View className="flex-row mx-auto">

          <TouchableOpacity className="mx-10 my-2"  onPress={()=>{Linking.openURL("https://wa.me/+2349133442800/?text=Hey%20there%20👋%2C%20I'm%20messaging%20from%20one%20of%20your%20apps(MyUssd).")}}><Ionicons name="logo-whatsapp" size={26}/></TouchableOpacity>
          <TouchableOpacity className="mx-10 my-2"  onPress={()=>{Linking.openURL("mailto:olajide.m.olanrewaju@gmail.com")}}><Ionicons name="mail" size={26}/></TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
}
