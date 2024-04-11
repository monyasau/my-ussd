import { useState } from "react";
import { Linking, Modal, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const RechargeModal=({switchRechargeModal})=> {
    const [input, setInput]=useState("")
    const combinedInput = `*311*${input}#`
    return (
        <Modal transparent >
            <View className="w-full h-full bg-black/25 justify-center items-center">
            <View className="w-[300px]  bg-white p-8 rounded-lg ">
                <View className="flex-row items-center justify-between">

                <Text className="text-center text-bold text-lg">Input your voucher pin</Text>
                    <TouchableOpacity className="bg-red-100 rounded-full p-2" onPress={()=>switchRechargeModal()}>
                        <Ionicons name="close-outline" size={24}/>
                    </TouchableOpacity>
                </View>
                <TextInput className="p-2 my-4 border rounded-lg" keyboardType="numeric" onChangeText={userInput=>setInput(userInput)} value={input}/>
                <View aria-label="buttons" className="flex-row justify-between">

                <TouchableOpacity className="border rounded px-4 py-2" onPress={()=>setInput("")}>
                    <Text>Reset Input</Text>
                </TouchableOpacity>

                <TouchableOpacity className="border rounded px-4 py-2" onPress={()=>{switchRechargeModal(); Linking.openURL(`tel:${encodeURIComponent(combinedInput)}`)}}>
                    <Text>Recharge Airtime</Text>
                </TouchableOpacity>
                </View>
            </View>
            </View>
        </Modal>
    );
}

export default RechargeModal;