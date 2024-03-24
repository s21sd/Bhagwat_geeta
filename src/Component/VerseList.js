import React, { useState, useEffect } from 'react';
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
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import axios from 'axios'
const VerseList = ({ chaperNo }) => {
    const [data, setData] = useState(null);
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
    }, []);
    // console.log(data)
    return (
        <View>
            <FlatList
                numColumns={1}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 60 }}
                data={data}
                renderItem={({ item, index }) => <ChapterCard item={item} />}
                keyExtractor={item => item.id}
            />
        </View>
    );
};
const ChapterCard = ({ item }) => {
    const navigation = useNavigation();
    console.log(item.id);
    return (
        <View>
            <TouchableOpacity className="flex py-2 px-2 space-y-2 bg-white shadow rounded-[25px] mt-2" onPress={() => navigation.navigate("VerseRead")}>
                <View className=" flex flex-row justify-between items-center">
                    <View className="flex flex-row justify-center items-center">
                        <MaterialIcons name="notes" size={24} color="red" />

                        <Text
                            style={{ fontSize: hp(1.8) }}
                            className="text-black font-bold ml-1 mb-1 tracking-wide"
                        >
                            Verse 1
                        </Text>
                    </View>
                    <View><Feather name="chevron-right" size={24} color="red" /></View>
                </View>
                <View className="p-2">
                    <Text style={{ fontSize: hp(2) }}>Dhritarashtra said  What did my people and the sons of Pandu do when they had assembled together eager for battle on the holy plain of Kurukshetra, O Sanjaya.</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}


export default VerseList;