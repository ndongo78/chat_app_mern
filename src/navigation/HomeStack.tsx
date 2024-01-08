import {createStackNavigator} from '@react-navigation/stack';
import BottomTab from './BottomTab.tsx';
import ChatScreen from "../screens/ChatScreen.tsx";

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Acceuil"
        component={BottomTab}
        options={{headerShown: false}}
      />
        <Stack.Screen name='Chat' component={ChatScreen} />
    </Stack.Navigator>
  );
};

export default HomeStack;
