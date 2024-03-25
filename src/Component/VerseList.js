import React, { useState, useEffect } from 'react';
import {
    SafeAreaView,
    View,
    FlatList,
    StyleSheet,
    Image,
    Text,
    StatusBar,
    TouchableOpacity,
    ActivityIndicator
} from 'react-native';
import { booksNames } from '../Constants/Booknames';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import axios from 'axios'
const VerseList = ({ chaperNo }) => {
    const [data, setData] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const options = {
                method: 'GET',
                url: `https://bhagavad-gita3.p.rapidapi.com/v2/chapters/${chaperNo}/verses/`,
                headers: {
                    'X-RapidAPI-Key': '720245f4bfmsha05ea578a776e3dp123fd5jsn247d215c36ba',
                    'X-RapidAPI-Host': 'bhagavad-gita3.p.rapidapi.com'
                }
            };

            try {
                const response = await axios.request(options);
                const data = response.data;
                // console.log(response.data)
                setData(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, [chaperNo]);
    return (
        <View>
            {
                data.length > 0 ? <FlatList
                    nestedScrollEnabled={true}
                    scrollEnabled={false}
                    numColumns={1}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ paddingBottom: 60 }}
                    data={data}
                    renderItem={({ item, index }) => <ChapterCard item={item} />}
                    keyExtractor={item => item.verse_number}
                /> :
                    <View className="flex justify-center items-center mt-3">
                        <ActivityIndicator size={26} color="red" />
                    </View>

            }

        </View>
    );
}
const ChapterCard = ({ item }) => {
    const navigation = useNavigation();
    const englishTranslations = item.translations.filter(translation => translation.language === "english");
    return (
        <View>
            <TouchableOpacity className="flex py-2 px-2 space-y-2 bg-white shadow rounded-[25px] mt-2" onPress={() => navigation.navigate("VerseRead", {
                index: item.verse_number,
                chaperNo: item.chapter_number

            })}>
                <View className=" flex flex-row justify-between items-center">
                    <View className="flex flex-row justify-center items-center">
                        <MaterialIcons name="notes" size={24} color="red" />
                        <Text
                            style={{ fontSize: hp(1.8) }}
                            className="text-black font-bold ml-1 mb-1 tracking-wide"
                        >
                            Verse {item.verse_number}
                        </Text>
                    </View>
                    <View><Feather name="chevron-right" size={24} color="red" /></View>
                </View>
                {
                    <View className="p-2">
                        <Text style={{ fontSize: hp(2) }}>{englishTranslations[0].description}</Text>
                    </View>
                }
            </TouchableOpacity>
        </View>
    );
};



export default VerseList;