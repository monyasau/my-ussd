import { useState } from "react";
import { Linking, Modal, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const ShareModal=({switchShareModal, airtime})=> {
    const [phoneNumber, setPhoneNumber]=useState("")
    const combinedInput = `*321*1*1*${phoneNumber}#`
    return (
        <Modal transparent >
            <View className="w-full h-full bg-black/25 justify-center items-center">
            <View className="w-[300px]  bg-white p-8 rounded-lg ">
                <View className="flex-row items-center justify-between">

                <Text className="text-center text-bold text-lg">Receiver Phone Number </Text>
                    <TouchableOpacity className="bg-red-100 rounded-full p-2" onPress={()=>switchShareModal()}>
                        <Ionicons name="close-outline" size={24}/>
                    </TouchableOpacity>
                </View>
                <TextInput className="p-2 my-4 border rounded-lg" keyboardType="numeric" onChangeText={userInput=>setPhoneNumber(userInput)} value={phoneNumber}/>
                <View aria-label="buttons" className="flex-row justify-between">

                <TouchableOpacity className="border rounded px-4 py-2" onPress={()=>setPhoneNumber("")}>
                    <Text>Reset Input</Text>
                </TouchableOpacity>

                <TouchableOpacity className="border rounded px-4 py-2" onPress={()=>{switchShareModal(); Linking.openURL(`tel:${encodeURIComponent(combinedInput)}`)}}>
                    <Text>Proceed</Text>
                </TouchableOpacity>
                </View>
            </View>
            </View>
        </Modal>
    );
}

export default ShareModal;