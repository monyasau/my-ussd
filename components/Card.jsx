import React from "react";
import { Button, View, Text } from "react-native";
const Card=({cardData})=>{
return( <>
<View className=" bg-gray-400 rounded-xl flex-4  border-white p-3 m-3">
    <Text className="text-2xl">{cardData.title}</Text>
    <Text>{cardData.content}</Text>
    </View>
</>)
}
export default Card;