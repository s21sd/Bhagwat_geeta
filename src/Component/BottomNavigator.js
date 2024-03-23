import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Mainscreen from '../Screen/Mainscreen';
import Readbook from './Readbook';

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Mainscreen" component={Mainscreen} />
            <Tab.Screen name="Readbook" component={Readbook} />
        </Tab.Navigator>
    );
};

export default BottomNavigator;
