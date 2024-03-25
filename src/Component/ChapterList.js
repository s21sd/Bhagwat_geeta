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
                nestedScrollEnabled={true}
                scrollEnabled={false}
                numColumns={2}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 60 }}
                columnWrapperStyle={{
                    justifyContent: 'space-between'
                }}
                data={booksNames}
                renderItem={({ item, index }) => <ChapterCard item={item} />}
                keyExtractor={item => item.name}
            />
        </View>
    );
};
const ChapterCard = ({ item }) => {
    const navigation = useNavigation();
    return (
        <View>
            <TouchableOpacity className="flex py-1 space-y-2" onPress={() => navigation.navigate("Readbook", {
                chName: `${item?.translation}`,
                chaperNo: item.chapter_number,
                summary: `${item.summary.en}`

            })}>
                <View className="bg-white shadow rounded-[25px]">
                    <Image
                        source={require("../../assets/image 2.png")}
                        contentFit='cover'
                        style={{ width: wp(44), height: wp(52) }}
                        className="rounded-[25px]"
                    />
                </View>
                <Text
                    style={{ fontSize: hp(2) }}
                    className="text-gray-600 font-bold ml-1 mb-1 tracking-wide"
                >
                    Chapter:
                    {
                        item?.chapter_number
                    }
                </Text>

                <Text
                    style={{ fontSize: hp(1.8) }}
                    className="text-gray-500 font-bold ml-1 mb-1 tracking-wide"
                >
                    {
                        item?.translation?.length > 20 ? item.translation.slice(0, 20) + '...' : item.translation
                    }
                </Text>
            </TouchableOpacity>
        </View>
    )
}


export default ChapterList;