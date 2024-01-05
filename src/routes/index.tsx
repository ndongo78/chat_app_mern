import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import StackNavigator from '../navigation/StackNagivator.tsx';
import {StatusBar} from 'react-native';

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
      <StackNavigator />
    </NavigationContainer>
  );
};

export default Routes;
