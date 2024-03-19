import { StyleSheet } from 'react-native';
import Home from './src/Screen/Home';
import Welcome from './src/Screen/Welcome';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Mainscreen from './src/Screen/Mainscreen';
import Getstarted from './src/Component/Getstarted';
import Readbook from './src/Component/Readbook';
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Mainscreen' screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Welcome' component={Welcome} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Getstarted" component={Getstarted} />
        <Stack.Screen name="Mainscreen" component={Mainscreen} />
        <Stack.Screen name="Readbook" component={Readbook} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
