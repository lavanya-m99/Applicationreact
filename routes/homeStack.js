import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import Home from '../components/home';
import Details from '../components/details';
import About from '../components/about';


const screens = {
    Home: {
        screen: Home
    },
    About:{
        screen: About
    },
    Details:{
       screen: Details
    }
  
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);