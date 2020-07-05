import {createStackNavigator} from 'react-navigation-stack';
import Home from 'containers/dashboard/home';

const routeConfiguration = {
  Home: {
    screen: Home,
    navigationOptions: ({navigation}) => ({
      title: 'Home',
    }),
  },
};

const stackNavigatorConfiguration = {
  headerMode: 'none',
  mode: 'modal',
  defaultNavigationOptions: {
    cardStlye: {
      backgroundColor: 'transparent',
      opacity: 1,
    },
  },
};

export default createStackNavigator(
  routeConfiguration,
  stackNavigatorConfiguration,
);
