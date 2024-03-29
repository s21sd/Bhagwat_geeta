import { useState } from 'react';
import Home from './src/Screen/Home';
import Welcome from './src/Screen/Welcome';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Mainscreen from './src/Screen/Mainscreen';
import Getstarted from './src/Component/Getstarted';
import Readbook from './src/Component/Readbook';
import BottomNavigator from './src/Component/BottomNavigator';
import VerseRead from './src/Screen/VerseRead';
import { Provider } from 'react-redux';
import { Store } from './redux/store';
import Settings from './src/Screen/Settings';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
export default function App() {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Welcome' screenOptions={{ headerShown: false }}>
          <Stack.Screen name='Welcome' component={Welcome} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Getstarted" component={Getstarted} />
          <Stack.Screen name="Mainscreen" component={Mainscreen} />
          <Stack.Screen name="Readbook" component={Readbook} />
          <Stack.Screen name="VerseRead" component={VerseRead} />
          <Stack.Screen name="Settings" component={Settings} />
        </Stack.Navigator>

        {/* <Tab.Navigator initialRouteName='Welcome' screenOptions={{ headerShown: false }}>
          <Tab.Screen name='Welcome' options={{ tabBarStyle: { display: 'none' } }} component={Welcome} />
          <Tab.Screen name="Home" options={{ tabBarStyle: { display: 'none' } }} component={Home} />
          <Tab.Screen name="Getstarted" options={{ tabBarStyle: { display: 'none' } }} component={Getstarted} />
          <Tab.Screen name="Mainscreen" component={Mainscreen} />
          <Tab.Screen name="Readbook" component={Readbook} />
          <Tab.Screen name="VerseRead" component={VerseRead} />
          <Tab.Screen name="Settings" component={Settings} />
        </Tab.Navigator> */}


      </NavigationContainer>
    </Provider>

  );
}

