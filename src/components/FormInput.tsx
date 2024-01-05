import tw from 'twrnc';
import {
  TextInput,
  View,
  Text,
  TouchableOpacity,
  StyleProp,
  TextStyle,
  KeyboardTypeOptions,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
  placeholder: string;
  style: StyleProp<TextStyle>;
  value: string;
  handleChange: (t:string) => void;
  handleBlur: (t: string) => void;
  keyboardType: KeyboardTypeOptions | undefined;
  secureText: boolean;
  iconNanme?: string | undefined;
  showPassword?: () => void;
}
const FormInput = ({
  placeholder,
  style,
  value,
  handleChange,
  keyboardType,
  secureText,
  iconNanme,
    handleBlur,
    showPassword
}: Props) => {
  return (
    <View style={tw`bg-white  rounded-xl`}>
      <TextInput
        style={style}
        placeholder={placeholder}
        value={value}
        onChangeText={handleChange}
        keyboardType={keyboardType}
        secureTextEntry={secureText}
        onBlur={handleBlur}
      />
      <TouchableOpacity style={tw`absolute right-2 top-3`} onPress={showPassword}>
        <Icon name={iconNanme} size={25} />
      </TouchableOpacity>
    </View>
  );
};

export default FormInput;
