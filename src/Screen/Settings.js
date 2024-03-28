import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView, TouchableOpacity, Image, Switch } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
import { setTheme } from '../../redux/action';
const Settings = () => {
    const { theme } = useSelector((state) => state.themeReducer)
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const chageTheme = () => {
        if (theme === "light" && isEnabled) {
            dispatch(setTheme("dark"))
        }
        else {
            dispatch(setTheme("light"))
        }
    }
    useEffect(() => {
        chageTheme();
    }, [isEnabled])

    return (
        <ScrollView nestedScrollEnabled={true} className="flex-1 bg-gray-200 p-2">
            <View className="mt-2">
                <TouchableOpacity
                    onPress={() => navigation.navigate("Mainscreen")}
                    style={{
                        width: hp(5.5),
                        height: hp(5.5),
                        marginTop: hp(4)
                    }} className="mx-4 bg-black flex justify-center items-center rounded-full"
                >
                    <Ionicons name="arrow-back" size={30} color="white" />
                </TouchableOpacity>
                <View className="flex justify-between items-center p-2 mt-2 flex-row ">
                    <Text style={{ fontSize: hp(2) }} className="font-bold">Dark Mode</Text>
                    <Switch
                        trackColor={{ false: '#767577', true: '#FF8600' }}
                        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />
                </View>
            </View>

        </ScrollView >
    )
}

export default Settings