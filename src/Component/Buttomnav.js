import React from 'react'
import { View, Text, StatusBar, ScrollView, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
const Buttomnav = () => {
    return (
        <View>

            {/* {For the bottom navbar} */}
            <View className="flex-row justify-between items-center m-5 p-2 bg-white opacity-[00.7] rounded-2xl">
                <TouchableOpacity className="flex justify-center items-center ">
                    <Entypo name="home" size={35} color="red" />

                </TouchableOpacity>

                <TouchableOpacity className="flex justify-center items-center" >
                    <Feather name="bookmark" size={35} color="black" />

                </TouchableOpacity>

                <TouchableOpacity className="flex justify-center items-center " >
                    <MaterialIcons name="celebration" size={35} color="black" />

                </TouchableOpacity>

                <TouchableOpacity className="flex justify-center items-center ">
                    <Ionicons name="settings" size={35} color="black" />
                </TouchableOpacity>

            </View>
        </View>
    )
}

export default Buttomnav