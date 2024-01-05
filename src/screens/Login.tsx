import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import tw from 'twrnc';
import {Avatar} from 'react-native-paper';
import {useNavigation, useTheme} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import FormInput from '../components/FormInput.tsx';
import Button from '../components/Button.tsx';
import {useState} from 'react';
const Login = () => {
  const {colors} = useTheme();
  const [showText, setShowText] = useState(true);
  const navigation: any =useNavigation();
  return (
    <View style={tw`flex-1 justify-center items-center`}>
      <View style={tw`justify-center items-center mb-4`}>
        <Avatar.Image source={require('../assets/chatndong.png')} size={100} />
        <Text style={tw`text-2xl font-bold text-[${colors.text}] mt-2`}>
          Restez en contact avec vos amis
        </Text>
      </View>
      <View style={tw`justify-center items-center`}>
        <View style={tw`mt-5`}>
          <FormInput
            placeholder={'jo@yahoo.fr'}
            value={''}
            style={tw`w-[300px] pl-2`}
            handleChange={text => {}}
            secureText={false}
            keyboardType={'email-address'}
            handleBlur={() => {}}
          />
        </View>
        <View style={tw`m-5`}>
          <FormInput
            placeholder={'*******'}
            value={''}
            style={tw`w-[300px] pl-2`}
            handleChange={text => {}}
            secureText={showText}
            keyboardType={'default'}
            handleBlur={() => {}}
            iconNanme={showText ? 'eye' : 'eye-off'}
            showPassword={() => setShowText(!showText)}
          />
        </View>
      </View>
      <View style={tw`self-center w-9/12 mt-4`}>
        <Button
          textContent={
            <Text
              style={tw`p-2 text-2xl text-center text-[${colors.text}] font-bold`}>
              Se connecter
            </Text>
          }
          handlePress={() => {}}
          style={tw`bg-[${colors.primary}] w-full rounded-2xl`}
        />
      </View>
      <View style={tw`flex-row mt-5 gap-10`}>
        <Button
          textContent={
            <Icon name={'logo-facebook'} size={50} color={colors.text} />
          }
          handlePress={() => {}}
          style={tw``}
        />
        <Button
          textContent={
            <Icon name={'logo-google'} size={50} color={colors.text} />
          }
          handlePress={() => {}}
          style={tw``}
        />
      </View>
      <Button
        textContent={
          <Text style={tw`text-2xl mt-8 text-[${colors.primary}]`}>
            Créer un compte
          </Text>
        }
        handlePress={() => navigation.push('Register')}
        style={tw``}
      />
    </View>
  );
};

export default Login;
