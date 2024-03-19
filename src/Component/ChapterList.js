// import React from 'react'
// import { View, Text, ScrollView, TouchableOpacity, Image, FlatList } from 'react-native'
// import { AntDesign } from '@expo/vector-icons';
// import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
// import { useNavigation } from '@react-navigation/native';
// const ChapterList = () => {
//     return (
//         <View>
//             <FlatList
//                 data=""
//                 numColumns={2}
//                 keyExtractor={item => item.name}
//                 showsVerticalScrollIndicator={false}
//                 contentContainerStyle={{ paddingBottom: 60, paddingTop: 20 }}
//                 columnWrapperStyle={{
//                     justifyContent: 'space-between'
//                 }}
//                 renderItem={({ item, index }) => <Text>HELLO</Text>}
//             />
//         </View>
//     )
// }

// export default ChapterList

import React from 'react';
import {
    SafeAreaView,
    View,
    FlatList,
    StyleSheet,
    Image,
    Text,
    StatusBar,
    TouchableOpacity
} from 'react-native';
import { booksNames } from '../Constants/Booknames';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
const ChapterList = () => {

    return (
        <View>
            <FlatList
                numColumns={2}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 60 }}
                columnWrapperStyle={{
                    justifyContent: 'space-between'
                }}
                data={booksNames}
                renderItem={({ item, index }) => <ChapterCard item={item} />}
                keyExtractor={item => item.chaperNo}
            />
        </View>
    );
};
const ChapterCard = ({ item }) => {
    const navigation = useNavigation();
    return (
        <View>
            <TouchableOpacity className="flex py-1 space-y-2" onPress={() => navigation.navigate("Readbook")}>
                <View className="bg-white shadow rounded-[25px]">
                    <Image
                        source={require("../../assets/image 2.png")}
                        contentFit='cover'
                        style={{ width: wp(44), height: wp(52) }}
                        className="rounded-[25px]"
                    />
                </View>

                <Text
                    style={{ fontSize: hp(1.8) }}
                    className="text-black font-bold ml-1 mb-1 tracking-wide"
                >
                    {
                        item?.name?.length > 20 ? item.name.slice(0, 20) + '...' : item.name
                    }
                </Text>
            </TouchableOpacity>
        </View>
    )
}


export default ChapterList;