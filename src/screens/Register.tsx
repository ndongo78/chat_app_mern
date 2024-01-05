import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import tw from 'twrnc';
import {Avatar} from 'react-native-paper';
import {useNavigation, useTheme} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import FormInput from '../components/FormInput.tsx';
import Button from '../components/Button.tsx';
import {useState} from 'react';
const Register = () => {
  const {colors} = useTheme();
  const [showText, setShowText] = useState(true);
  const navigation: any = useNavigation();
  return (
    <View style={tw`flex-1 justify-center items-center`}>
      <Text style={tw`text-2xl font-bold text-[${colors.text}] m-6`}>
        S'incrire
      </Text>
      <View style={tw`justify-center items-center`}>
        <View style={tw`mt-5`}>
          <FormInput
            placeholder={'username'}
            value={''}
            style={tw`w-[300px] pl-2`}
            handleChange={text => {}}
            secureText={false}
            keyboardType={'email-address'}
            handleBlur={() => {}}
          />
        </View>
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
              S'inscrire
            </Text>
          }
          handlePress={() => {}}
          style={tw`bg-[${colors.primary}] w-full rounded-2xl`}
        />
      </View>
      <View style={tw`mt-10 items-center`}>
        <Text style={tw`text-[${colors.text}] text-xl`}>
          Vous avez déja un compte ?
        </Text>
        <Button
          textContent={
            <Text style={tw`text-2xl mt-4 text-[${colors.primary}]`}>
              Se connecter{' '}
            </Text>
          }
          handlePress={() => navigation.push('Login')}
          style={tw``}
        />
      </View>
    </View>
  );
};

export default Register;
