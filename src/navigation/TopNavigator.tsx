import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import MyFriends from '../screens/friends/MyFriends.tsx';
import FriendRequest from '../screens/friends/FriendRequest.tsx';

const Tab = createMaterialTopTabNavigator();

const TopNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
          name="Friend"
          component={MyFriends}
          options={{
              title: 'Mes amis',
              tabBarLabelStyle:{
                  fontSize: 20
              }
          }}
      />
      <Tab.Screen
          name="FriendRequest"
          component={FriendRequest}
          options={{
              title: 'Demande amis'
          }}
      />
    </Tab.Navigator>
  );
};

export default TopNavigator;
