import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import Login from './Login';
import Home from './Home';

const mainNavigation = createSwitchNavigator({
  Login,
  Home,
});

export default mainNavigation;