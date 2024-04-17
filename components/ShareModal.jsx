import { useState } from "react";
import { Linking, Modal, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const ShareModal=({switchShareModal, shareType})=> {
    const [phoneNumber, setPhoneNumber]=useState("")

    const combinedInput = `*321*${shareType.subCode}*1*${phoneNumber}#`
    return (
        <Modal transparent >
            <View className="w-full h-full bg-black/25 justify-center items-center">
            <View className="w-[300px]  bg-white p-6 rounded-lg ">
                <View className="flex-row justify-between items-center">

<Text className=" capitalize">Share {shareType.title}</Text>
                    <TouchableOpacity className="bg-red-100 rounded-full p-2" onPress={()=>switchShareModal()}>
                        <Ionicons name="close-outline" size={24}/>
                    </TouchableOpacity>
                </View>
                <Text className="text-bold text-lg">Receiver Phone Number <Text className="font-black  text-2xl">&darr;</Text></Text>
                <TextInput autoFocus={true} className="p-2 my-4 border rounded-lg" keyboardType="numeric" onChangeText={userInput=>setPhoneNumber(userInput)} value={phoneNumber}/>
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