import React from 'react'
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
const VerseRead = ({ route }) => {
    const { item } = route.params
    console.log(item);
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1 }} >

            <Image className="absolute w-full h-full" blurRadius={60} source={require('../../assets/Rectangle 7.png')} />
            <ScrollView nestedScrollEnabled={true} className="flex-1">
                <View className="flex flex-row justify-between items-center mt-3">

                    <TouchableOpacity
                        onPress={() => navigation.navigate('Mainscreen')}
                        style={{
                            width: hp(5.5),
                            height: hp(5.5),
                            marginTop: hp(4)
                        }} className=" bg-white mx-4 flex justify-center items-center rounded-full"
                    >
                        <Ionicons name="arrow-back" size={30} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('')}
                        style={{
                            width: hp(5.5),
                            height: hp(5.5),
                            marginTop: hp(4)
                        }} className=" bg-white mx-4 flex justify-center items-center rounded-full"
                    >
                        <Feather name="bookmark" size={30} color="black" />
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}

export default VerseRead