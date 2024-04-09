import { Text, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function BottomNavigation({ active, switchAboutModal }) {
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
