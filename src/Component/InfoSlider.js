import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import Swiper from 'react-native-swiper'
import { AntDesign } from '@expo/vector-icons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const InfoSlider = () => {
    return (
        <View className="flex justify-center items-center" >

            <View className="flex m-6" >

                <Swiper  >
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

                    {/* <View style={styles.slide}>
                        <Image source={require('../../assets/Group 8.png')} style={styles.image} />

                        <View className="flex items-center m-6">
                            <Text style={{ fontSize: hp(3) }} className="font-bold text-white text-6xl">Let's Start</Text>
                        </View>
                    </View> */}

                </Swiper>
                <View className="flex justify-between items-center me-4 flex-row ">
                    <TouchableOpacity>
                        <Text className="text-white" style={{ fontSize: hp(3) }}>Skip</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="flex flex-row justify-center items-center gap-1">
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