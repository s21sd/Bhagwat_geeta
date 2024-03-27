import React, { useState, useEffect } from 'react'
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import ReadMore from '@fawazahmed/react-native-read-more';
import axios from 'axios'
const VerseRead = ({ route }) => {
    const { index, chaperNo } = route.params
    console.log(index, chaperNo);
    const navigation = useNavigation();
    const [data, setData] = useState({});

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const options = {
    //             method: 'GET',
    //             url: `https://bhagavad-gita3.p.rapidapi.com/v2/chapters/${chaperNo}/verses/${index}/`,
    //             headers: {
    //                 'X-RapidAPI-Key': '720245f4bfmsha05ea578a776e3dp123fd5jsn247d215c36ba',
    //                 'X-RapidAPI-Host': 'bhagavad-gita3.p.rapidapi.com'
    //             }
    //         };

    //         try {
    //             const response = await axios.request(options);
    //             const data = response.data;
    //             // console.log(response.data)
    //             setData(response.data);
    //         } catch (error) {
    //             console.error(error);
    //         }
    //     };

    //     fetchData();
    // }, [chaperNo]);
    // console.log(data[0]);
    return (
        <View style={{ flex: 1 }} >


            {/* <Image className="absolute w-full h-full" blurRadius={60} source={require('../../assets/Rectangle 7.png')} /> */}
            <ScrollView showsVerticalScrollIndicator={false} nestedScrollEnabled={true} className="flex-1">
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
                <View className="flex flex-col justify-center items-center px-5">
                    <View className="flex flex-col justify-center items-center p-2 gap-2">
                        <Text style={{ fontSize: hp(3) }} className="font-bold ">1.1</Text>
                        <Text style={{ fontSize: hp(2.5) }} className="font-semibold text-[#FF8600] mt-3">"धृतराष्ट्र उवाच धर्मक्षेत्रे कुरुक्षेत्रे समवेता युयुत्सवः|मामकाः पाण्डवाश्चैव किमकुर्वत सञ्जय ||१-१||"</Text>
                    </View>
                    {/* {Translation} */}
                    <View className="flex flex-col justify-center items-center p-2 gap-3 mt-2">
                        <Text style={{ fontSize: hp(3) }} className="font-bold">TRANSLATIONS</Text>
                        <View>
                            <Text style={{ fontSize: hp(2) }} className="font-bold text-gray-600 mt-6">"1.1 The King Dhritarashtra asked:"O Sanjaya! What happened on the sacred battlefield of Kurukshetra, when my people gathered against the Pandavas?"</Text>
                            <Text style={{ fontSize: hp(2) }} className="font-samibold text-right mt-3">
                                <Text className="font-semibold ">Author Name: </Text>Shri Purohit Swami
                            </Text>
                        </View>
                    </View>
                    <View className="w-[100%] border border-gray-400 mt-2"></View>
                    {/* {commentaries} */}
                    <View className="flex flex-col justify-center items-center p-2 gap-3 mt-2">
                        <Text style={{ fontSize: hp(3) }} className="font-bold">COMMENTARIES</Text>
                        <View>
                            <ReadMore className="font-bold text-gray-600 mt-6" numberOfLines={4} style={{ fontSize: hp(2) }}>
                                "1.1 धर्मक्षेत्रे on the holy plain? कुरुक्षेत्रे in Kurukshetra? समवेताः assembled together? युयुत्सवः desirous to fight? मामकाः my people? पाण्डवाः the sons of Pandu? च and? एव also? किम् what? अकुर्वत did do? सञ्जय O Sanjaya.Commentary Dharmakshetra -- that place which protects Dharma is Dharmakshetra. Because it was in the land of the Kurus? it was called Kurukshetra.Sanjaya is one who has conered likes and dislikes and who is impartial.",
                            </ReadMore>

                            <Text style={{ fontSize: hp(2) }} className="font-samibold text-right mt-3">
                                <Text className="font-semibold ">Author Name: </Text>Swami Sivananda
                            </Text>
                        </View>
                        <View>
                            <ReadMore className="font-bold text-gray-600 mt-6" numberOfLines={4} style={{ fontSize: hp(2) }}>
                                "।।1.1।। सम्पूर्ण गीता में यही एक मात्र श्लोक अन्ध वृद्ध राजा धृतराष्ट्र ने कहा है। शेष सभी श्लोक संजय के कहे हुए हैं जो धृतराष्ट्र को युद्ध के पूर्व की घटनाओं का वृत्तान्त सुना रहा था।\nनिश्चय ही अन्ध वृद्ध राजा धृतराष्ट्र को अपने भतीजे पाण्डवों के साथ किये गये घोर अन्याय का पूर्ण भान था। वह दोनों सेनाओं की तुलनात्मक शक्तियों से परिचित था। उसे अपने पुत्र की विशाल सेना की सार्मथ्य पर पूर्ण विश्वास था। यह सब कुछ होते हुये भी मन ही मन उसे अपने दुष्कर्मों के अपराध बोध से हृदय पर भार अनुभव हो रहा था और युद्ध के अन्तिम परिणाम के सम्बन्ध में भी उसे संदेह था। कुरुक्षेत्र में क्या हुआ इसके विषय में वह संजय से प्रश्न पूछता है। महर्षि वेदव्यास जी ने संजय को ऐसी दिव्य दृष्टि प्रदान की थी जिसके द्वारा वह सम्पूर्ण युद्धभूमि में हो रही घटनाओं को देख और सुन सकता था।",
                            </ReadMore>

                            <Text style={{ fontSize: hp(2) }} className="font-samibold text-right mt-3">
                                <Text className="font-semibold ">Author Name: </Text>Swami Chinmayananda
                            </Text>
                        </View>
                        <View>
                            <ReadMore className="font-bold text-gray-600 mt-6" numberOfLines={4} style={{ fontSize: hp(2) }}>
                                "।।1.1।।एवं गीताशास्त्रस्य साध्यसाधनभूतनिष्ठाद्वयविषयस्य परापराभिधेयप्रयोजनवतो व्याख्येयत्वं प्रतिपाद्य व्याख्यातुकामः शास्त्रं तदेकदेशस्य प्रथमाध्यायस्य द्वितीयाध्यायैकदेशसहितस्य तात्पर्यमाह   अत्र चेति। गीताशास्त्रे प्रथमाध्याये प्रथमश्लोके कथासंबन्धप्रदर्शनपरे स्थिते सतीति यावत्। तत्रैवमक्षरयोजना   धृतराष्ट्र उवाचेति। धृतराष्ट्रो हि प्रज्ञाचक्षुर्बाह्यचक्षुरभावाद्बाह्यमर्थं प्रत्यक्षयितुमनीशः सन्नभ्याशवर्तिनं संजयमात्मनो हितोपदेष्टारं पृच्छति   धर्मक्षेत्र इति। धर्मस्य तद्वृद्धेश्च क्षेत्रमभिवृद्धिकारणं यदुच्यते कुरुक्षेत्रमिति तत्र समवेताः संगता युयुत्सवो योद्धुकामास्ते च केचिन्मदीया दुर्योधनप्रभृतयः पाण्डवाश्चापरे युधिष्ठिरादयस्ते च सर्वे युद्धभूमौ संगता भूत्वा किमकुर्वत कृतवन्तः"
                            </ReadMore>

                            <Text style={{ fontSize: hp(2) }} className="font-samibold text-right mt-3">
                                <Text className="font-semibold ">Author Name: </Text>Sri Anandgiri
                            </Text>
                        </View>

                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default VerseRead