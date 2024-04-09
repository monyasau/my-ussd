import { Text, View, TouchableOpacity, Modal, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function AboutModal({ active, switchAboutModal }) {
  if (!active) {
    return null;
  }

  return (
    <Modal transparent>
      <View className="h-full bg-black/50 p-4">
        <View className="bg-white w-[300px] p-4 mx-auto my-auto justify-between rounded-xl border-2">
          {/* <View className="flex-row items-center justify-between">
            <Text className="text-xl font-medium">About</Text>
            <TouchableOpacity onPress={() => switchAboutModal()}>
              <Ionicons name="close" size={28} />
            </TouchableOpacity>
          </View> */}

          <TouchableOpacity onPress={() => switchAboutModal()} className="border border-white rounded-full bg-red-100 w-8 h-8 absolute right-0 -top-10 justify-center items-center">
            <Ionicons name="close" size={20} />
          </TouchableOpacity>

          <Text className="text-center text-lg font-bold pb-5">MyUSSD</Text>
          <Text className="text-center text-sm py-5">
            Made with &hearts; by{" "}
            <Text className="font-medium">Olajide Olanrewaju</Text>
          </Text>
          <Text className="text-center text-xs">Version 1.0.0</Text>
          <Text className="text-center text-sm pt-2">
            Copyright &copy; 2024
          </Text>
        </View>
      </View>
    </Modal>
  );
}
