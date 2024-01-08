import {View, Text} from 'react-native';
import tw from "twrnc";
import TopNavigator from "../navigation/TopNavigator.tsx";

const AllUsers = () => {
  return (
    <View style={tw`flex-1 mt-2`}>
      <TopNavigator />
    </View>
  );
};

export default AllUsers;
