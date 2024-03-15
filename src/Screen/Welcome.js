import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react'
import { View, Text, Image, ActivityIndicator } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
const Welcome = () => {
    const navigation = useNavigation();
    useEffect(() => {
        setTimeout(() => navigation.navigate("Home"), 2500);
    }, [])
    return (
        <View className="flex-1 justify-center items-center bg-[#FF8600]">
            <View>
                <View>
                    <Image source={require('../../assets/image 1.png')} style={{
                        width: hp(25),
                        height: hp(25)
                    }} />
                </View>
            </View>
            <View className="flex items-center m-6">
                <Text style={{ fontSize: hp(4) }} className="font-bold text-white text-6xl">BHAGAVAD GITA</Text>
                <Text style={{ fontSize: hp(2) }} className="font-medium text-white  text-lg">Bhagavad Gita in Hindi & English, with Audio</Text>
                <View className="mt-2">
                    <ActivityIndicator size={26} color="white" />
                </View>
            </View>
        </View>
    )
}

export default Welcome
