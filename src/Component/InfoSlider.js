import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import Swiper from 'react-native-swiper'
import { AntDesign } from '@expo/vector-icons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';

const InfoSlider = () => {
    const navigation = useNavigation();
    const [index, setIndex] = useState(0);
    const changeIndex = () => {
        setIndex(() => index + 1);
        if (index > 1) {
            setIndex(0);
            navigation.navigate("Getstarted");
        }
    }
    const onSliped = () => {
        navigation.navigate("Mainscreen");
    }
    return (
        <View className="flex justify-center items-center" >

            <View className="flex m-6" >

                <Swiper loop={false} loadMinimalSize={1} dotColor='black' activeDotColor='white' index={index} >
                    <View style={styles.slide}>
                        <Image source={require('../../assets/Group 7.png')} style={styles.image} />


                        <View className="flex items-center m-6">
                            <Text style={{ fontSize: hp(3) }} className="font-bold text-white text-6xl">Bhagavad Gita - Simplified</Text>
                            <Text style={{ fontSize: hp(2) }} className="font-medium text-white  text-lg">Read the Gita anytime, where ever you wish</Text>
                        </View>

                    </View>

                    <View style={styles.slide}>
                        <Image source={require('../../assets/Group 6.png')} style={styles.image} />


                        <View className="flex items-center m-6">
                            <Text style={{ fontSize: hp(3) }} className="font-bold text-white text-6xl">Multi Language</Text>
                            <Text style={{ fontSize: hp(2) }} className="font-medium text-white  text-lg">It build in two languages Hindi, English with best and easy translation </Text>
                        </View>

                    </View>

                    <View style={styles.slide}>
                        <Image source={require('../../assets/Group 5.png')} style={styles.image} />
                        <View className="flex items-center m-6">
                            <Text style={{ fontSize: hp(3) }} className="font-bold text-white text-6xl">Audio Book</Text>
                            <Text style={{ fontSize: hp(2) }} className="font-medium text-white  text-lg">You can listen the book in Hindi, English while doing your work </Text>
                        </View>
                    </View>

                </Swiper>
                <View className="flex justify-between items-center me-4 flex-row ">
                    <TouchableOpacity className="cursor-pointer" onPress={onSliped} >
                        <Text className="text-white " style={{ fontSize: hp(3) }}>Skip</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={changeIndex} className="flex flex-row justify-center items-center gap-1 cursor-pointer">
                        <Text className="text-white" style={{ fontSize: hp(3) }}>Next</Text>
                        <AntDesign name="arrowright" size={20} color="white" />
                    </TouchableOpacity>

                </View>

            </View>
        </View>
    )
}

export default InfoSlider

const styles = StyleSheet.create({
    slide: {
        width: "100%",
        height: 200,
        marginTop: 90
    }
    ,
    image: {
        padding: 15,
        width: "100%",
        height: "100%",
        objectFit: 'contain'
    }
})