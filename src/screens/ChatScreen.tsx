import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation, useRoute, useTheme} from '@react-navigation/native';
import {useLayoutEffect} from 'react';
import Material from 'react-native-vector-icons/MaterialCommunityIcons';
const ChatScreen = () => {
  const route = useRoute();
  const navigation: any = useNavigation();
  const {colors}=useTheme()
  const {item}: any = route.params;
  console.log(item);

  useLayoutEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      navigation.setOptions({
        headerLeft: () => (
          <TouchableOpacity>
            <Material name="chevron-left" size={30} color={colors.text} />
          </TouchableOpacity>
        ),
      });
    });
  }, []);

  return (
    <View>
      <Text>Chat screen</Text>
    </View>
  );
};

export default ChatScreen;
