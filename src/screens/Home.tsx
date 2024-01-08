import {View, Text, Pressable, FlatList} from 'react-native';
import {useTheme} from '@react-navigation/native';
import tw from 'twrnc';
import Icon from 'react-native-vector-icons/Ionicons';
import {userss} from '../constants/users.ts';
import {Avatar} from 'react-native-paper';

const Home = () => {
  const conversations = [];
  const {colors} = useTheme();
  return (
    <View style={tw`flex-1`}>
      <View>
        <Text style={tw`text-2xl font-bold ml-2 text-[${colors.text}]`}>
          Story
        </Text>
        <View style={tw`flex-row items-center`}>
          <View style={tw`items-center`}>
            <Pressable
              style={tw`bg-slate-800 w-20 h-20 items-center justify-center rounded-full`}>
              <Icon
                name="add"
                style={tw`text-[${colors.text}] p-2`}
                size={28}
              />
            </Pressable>
            <Text style={tw`text-[${colors.text}]`}>Add story</Text>
          </View>
          <FlatList
            horizontal
            data={userss}
            renderItem={({item}) => (
              <Pressable style={tw`m-3`}>
                <Avatar.Image source={{uri: item.avatar}} />
                <Text style={tw`text-[${colors.text}]`}> {item.name}</Text>
              </Pressable>
            )}
          />
        </View>
      </View>
      {/*    container conversation*/}
      <View style={tw`flex-1 bg-white rounded-t-[60px] mt-4 `}>
        {conversations.length > 0 ? (
          <View>
            <Text>Les conversation</Text>
          </View>
        ) : (
          <View style={tw`flex-1 justify-center items-center`}>
            <Text>Vous n'avez pas de conversations pour le moment</Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default Home;
