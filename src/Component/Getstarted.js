import React, { useState } from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Text, View, Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import Modal from "react-native-modal";
import Popup from './Popup';
const Getstarted = () => {
    const Navigation = useNavigation();
    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    return (
        <View>
            <View>
                <Popup isVisible={isModalVisible} />
            </View>


            <View className="flex justify-between items-center h-[100%]">
            
                <View className="flex justify-center items-center mt-32" >
                    <Image source={require('../../assets/Group 8.png')} />

                    <View className="flex items-center m-6">
                        <Text style={{ fontSize: hp(3) }} className="font-bold text-black ">Let's Start</Text>
                    </View>
                </View>


                <TouchableOpacity onPress={toggleModal} className="flex text-white p-2 rounded-md w-[70%] justify-center items-center m-14 bg-[#FF8600]">
                    <Text style={{ fontSize: hp(3) }} className="text-white">Get Started</Text>
                </TouchableOpacity>

            </View>
        </View>

    )
}

export default Getstarted


