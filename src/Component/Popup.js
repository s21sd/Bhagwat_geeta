import Modal from "react-native-modal";
import { Text, View, Image, TouchableOpacity, ToastAndroid } from 'react-native'
import React, { useMemo, useState } from 'react';
import RadioGroup from 'react-native-radio-buttons-group';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native'
const Popup = ({ isVisible }) => {
    const Navigation = useNavigation();
    const [selectedId, setSelectedId] = useState('0');
    const NavigateToMainScreen = () => {
        if (selectedId === '0') {
            ToastAndroid.show('Please Select a Language !', ToastAndroid.SHORT);
        }
        else if (selectedId == '1' || selectedId == '2') {
            Navigation.navigate('Mainscreen');
        }
    }
    const radioButtons = useMemo(() => ([
        {
            id: '1',
            label: 'English',
            value: 'option1'
        },
        {
            id: '2',
            label: 'Hindi   ',
            value: 'option2'
        }
    ]), []);



    return (
        <View>

            <Modal style={{
                marginTop: 20,
                zIndex: 0
            }} backdropOpacity={1} backdropColor={"#FFE4C7"} className="flex flex-col justify-between items-center" deviceHeight={450} isVisible={isVisible}>
                <Image className="object-contain w-16 h-20 mt-10" source={require('../../assets/Aa.png')} />
                <View style={{ flex: 1 }}>
                    <Text className="font-bold mt-5" style={{ fontSize: hp(2) }}>Choose your
                        preferred language</Text>
                    <Text className="text-[#3C3C3C]">(Don't worry you can change it later)</Text>
                    <RadioGroup
                        color="bg-[#FF8600]"
                        radioButtons={radioButtons}
                        onPress={setSelectedId}
                        selectedId={selectedId}
                    />

                    <TouchableOpacity onPress={NavigateToMainScreen} className="flex text-white p-2 rounded-md w-[70%] justify-center items-center m-14 bg-[#FF8600]">
                        <Text style={{ fontSize: hp(3) }} className="text-white">OK, LET'S Go! </Text>
                    </TouchableOpacity>

                </View>

            </Modal>
        </View>
    )
}

export default Popup