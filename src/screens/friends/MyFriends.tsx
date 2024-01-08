import {View, Text, FlatList, Pressable, TouchableOpacity} from 'react-native';
import tw from 'twrnc';
import {userss} from '../../constants/users.ts';
import {Avatar} from 'react-native-paper';
import {useNavigation, useTheme} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useState} from 'react';

const MyFriends = () => {
  const {colors} = useTheme();
  const [isShow, setIsShow] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigation: any = useNavigation();

  return (
    <View style={tw`flex-1`}>
      <FlatList
        keyExtractor={item => item.id.toString()}
        data={userss.slice(0, 2)}
        renderItem={({item}) => (
          <Pressable
            style={tw`m-2`}
            onPress={() => {
              setIsShow(!isShow);
              setCurrentIndex(item.id);
            }}>
            <View>
              <View style={tw`flex-row items-center`}>
                <Avatar.Image size={45} source={{uri: item.avatar}} />
                <View>
                  <Text style={tw`text-2xl text-[${colors.text}] ml-2`}>
                    {item.name}
                  </Text>
                </View>
              </View>
              {isShow && currentIndex === item.id && (
                <View style={tw`flex-row ml-10`}>
                  <TouchableOpacity
                    style={tw`m-3`}
                    onPress={() => navigation.push('Chat',{item:item})}>
                    <Icon name="logo-wechat" size={35} color={colors.text} />
                  </TouchableOpacity>
                  <TouchableOpacity style={tw`m-3`}>
                    <Icon name="call" size={35} color={colors.text} />
                  </TouchableOpacity>
                  <TouchableOpacity style={tw`m-3 bg-red-900 rounded-full`}>
                    <Icon name="close" size={35} color={colors.text} />
                  </TouchableOpacity>
                </View>
              )}
              {/*icon */}
            </View>
            <View style={tw`border-b-2 border-white opacity-20 m-2`} />
          </Pressable>
        )}
      />
    </View>
  );
};

export default MyFriends;
