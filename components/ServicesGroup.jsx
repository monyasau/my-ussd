import { Text, View, TouchableOpacity, Linking } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function ServicesGroup({ title, data, setRechargeModal, setShareType, setShareModal }) {
  return (
    <>
      <Text className="text-lg font-medium px-4">{title}</Text>
      <View className="flex-row flex-wrap py-4 px-2">
        {data.map((item, i) =>
          !item.acceptInput ? (
            <TouchableOpacity
              key={i}
              className="w-1/2 p-2"
              onPress={() =>
                Linking.openURL(`tel:${encodeURIComponent(item.code)}`)
              }
            >
              <View className="rounded-md p-4 bg-black/5">
                <Ionicons name={item.icon} size={25} color="#166534" />
                <Text className="text-xs pt-2">{item.title}</Text>
              </View>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              key={i}
              className="w-1/2 p-2"
              onPress={() =>
               {
                (item.shareType)?
                setShareModal(true)|setShareType(item.shareType)
                // setShareModal(true); setShareType(item.shareType)
                :
                setRechargeModal(true)
               }
              }
            >
              <View className="rounded-md p-4 bg-black/5">
                <Ionicons name={item.icon} size={25} color="#166534" />
                <Text className="text-xs pt-2">{item.title}</Text>
              </View>
            </TouchableOpacity>
          )
        )}
      </View>
    </>
  );
}
