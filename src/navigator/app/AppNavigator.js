import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import Splash from 'containers/Splash';
import Dashboard from 'navigator/dashboard';

const routeConfiguration = {
  Splash: {screen: Splash},
  Dashboard: {screen: Dashboard},
};

const AppNavigator = createSwitchNavigator(routeConfiguration);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
