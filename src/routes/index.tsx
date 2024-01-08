import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import StackNavigator from '../navigation/StackNagivator.tsx';
import {StatusBar} from 'react-native';
import HomeStack from "../navigation/HomeStack.tsx";

const Routes = () => {
  const Mytheme = {
    ...DefaultTheme,
    colors: {
      background: '#011526',
      primary: '#038C64',
      text: '#eee',

    },
  };
  return (
    <NavigationContainer theme={Mytheme}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={Mytheme.colors.background}
      />
      <HomeStack />
    </NavigationContainer>
  );
};

export default Routes;
