import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import InfoSlider from '../Component/InfoSlider'

const Home = () => {
    return (
        <View>
            <Image className="absolute w-full h-full" blurRadius={80} source={require('../../assets/image 2.png')} />
            <InfoSlider />

        </View>
    )
}

export default Home
