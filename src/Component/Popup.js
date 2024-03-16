import Modal from "react-native-modal";
import { Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useMemo, useState } from 'react';
import RadioGroup from 'react-native-radio-buttons-group';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
const Popup = ({ isVisible }) => {
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

    const [selectedId, setSelectedId] = useState();

    return (
        <View>
            <Modal deviceWidth={350} backdropOpacity={1} backdropColor={"#FFE4C7"} className="flex flex-col justify-between items-center mt-6" deviceHeight={450} isVisible={isVisible}>
                <Image className="object-contain w-14 h-16" source={require('../../assets/Aa.png')} />
                <View style={{ flex: 1 }}>
                    <Text className="font-bold " style={{ fontSize: hp(2) }}>Choose your
                        preferred language</Text>
                    <Text className="text-[#3C3C3C]">(Don't worry you can change it later)</Text>
                    <RadioGroup
                        // className="bg-[#FF8600]"
                        color="bg-[#FF8600]"
                        radioButtons={radioButtons}
                        onPress={setSelectedId}
                        selectedId={selectedId}
                    />

                    <TouchableOpacity className="flex text-white p-2 rounded-md w-[70%] justify-center items-center m-14 bg-[#FF8600]">
                        <Text style={{ fontSize: hp(3) }} className="text-white">OK, LET'S Go! </Text>
                    </TouchableOpacity>

                </View>

            </Modal>
        </View >
    )
}

export default Popup