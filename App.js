import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import store from './src/reducers/store';
import Home from './src/screens/Home';
import Ong from './src/screens/Ong';
import Register from './src/screens/Register';
import Sign from './src/screens/Sign';
import Unity from './src/screens/Unity';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name='Home' component={Home} />
          <Stack.Screen name='Sign' component={Sign} />
          <Stack.Screen name='Register' component={Register} />
          <Stack.Screen name='Ong' component={Ong} />
          <Stack.Screen name='Unity' component={Unity} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
