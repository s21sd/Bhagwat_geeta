import React from 'react'
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import ChapterList from '../Component/ChapterList';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import Buttomnav from '../Component/Buttomnav';
import ReadMore from '@fawazahmed/react-native-read-more';
import VerseList from './VerseList';

const Readbook = ({ route }) => {
    const { chName, chaperNo, summary } = route.params
    // console.log(summary)

    const navigation = useNavigation();
    return (
        <View style={{ flex: 1 }}>
            {/* <Image className="absolute w-full h-full" blurRadius={60} source={require('../../assets/Rectangle 7.png')} /> */}

            <ScrollView nestedScrollEnabled={true} className="flex-1">
                <View>
                    <Image
                        source={require('../../assets/Rectangle 7.png')}
                        style={{
                            width: wp(100),
                            height: hp(55)
                        }}
                        resizeMode="cover"
                        className="rounded-b-[45px]"
                    />
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Mainscreen')}
                        style={{
                            width: hp(5.5),
                            height: hp(5.5),
                            marginTop: hp(4)
                        }} className="absolute bg-white mx-4 flex justify-center items-center rounded-full"
                    >
                        <Ionicons name="arrow-back" size={30} color="black" />
                    </TouchableOpacity>
                    <View style={{ position: 'absolute', bottom: 0, width: '100%' }}>

                        {/* For the BookMarks */}
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 10 }}>
                            <TouchableOpacity
                                style={{
                                    width: hp(7),
                                    height: hp(7),
                                    marginTop: hp(4),


                                }} className="bg-white mx-4 flex justify-center items-center rounded-full"
                            >
                                <FontAwesome5 name="pause-circle" size={30} color="black" />
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{
                                    width: hp(7),
                                    height: hp(7),
                                    marginTop: hp(4),

                                }} className="bg-white mx-4 flex justify-center items-center rounded-full"
                            >
                                <Feather name="bookmark" size={30} color="black" />
                            </TouchableOpacity>
                        </View>
                    </View>


                </View>
                <View className="mx-4 mt-4 space-y-3">

                    <Text style={{ fontSize: hp(3) }} className="font-bold text-neutral-700">
                        {chName}
                    </Text>
                    <Text style={{ fontSize: hp(2) }} className="text-gray-500">Chapter {chaperNo}</Text>
                    <View>
                        <ReadMore numberOfLines={4} style={{ fontSize: hp(2.3) }}>
                            {
                                summary
                            }
                        </ReadMore>
                    </View>


                    <View className="mb-10">
                        <VerseList chaperNo={chaperNo} />
                    </View>
                </View>
            </ScrollView>

            {/* <View style={{ position: 'fixed', width: '100%' }}>
                <Buttomnav />
            </View> */}
        </View>
    )
}

export default Readbook
