import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home.tsx';
import HistoryCall from '../screens/HistoryCall.tsx';
import AllUsers from '../screens/AllUsers.tsx';
import Profil from '../screens/Profil.tsx';
import {useTheme} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import {View, Text, TouchableOpacity} from 'react-native';
import tw from 'twrnc';
import FontAw from 'react-native-vector-icons/FontAwesome5';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  const {colors} = useTheme();
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarStyle: {
          backgroundColor: colors.background,
          height: 80,
          position: 'absolute',
          left: 10,
          right: 10,
          bottom: 5,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 50,
        },
        tabBarActiveTintColor: '#47e91e',
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color, size}) => (
            <Icon name="logo-wechat" size={size + 8} color={color} />
          ),
          headerStyle: {
            height: 100,
            elevation: 0,
          },
          headerLeft: () => (
            <View style={tw`ml-1`}>
              <Text style={tw`text-3xl text-[${colors.text}]`}>Chatndong</Text>
              <Text style={tw`text-xl text-[${colors.text}]`}>
                Welcome John
              </Text>
            </View>
          ),
          headerTitle: '',
          headerRight: () => (
            <TouchableOpacity style={tw`mr-2`}>
              <Icon name="notifications" size={30} color={colors.text} />
            </TouchableOpacity>
          ),
        }}
      />
      <Tab.Screen
        name="Call"
        component={HistoryCall}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="call" size={size + 8} color={color} />
          ),
          tabBarLabel: '',
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Users"
        component={AllUsers}
        options={{
          tabBarIcon: ({color, size}) => (
            <FontAw name="users" size={size + 8} color={color} />
          ),
          tabBarLabel: '',
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Profil"
        component={Profil}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="person" size={size + 8} color={color} />
          ),
          tabBarLabel: '',
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
