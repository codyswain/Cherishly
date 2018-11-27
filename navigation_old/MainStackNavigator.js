import React from 'react';
import { createStackNavigator} from 'react-navigation';

/*
This is where you import icons for navigation buttons
import NavigationIcons from '../components/NavigationIcons';
*/

import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';

/*
	This type of navigation allows users to press a back button
	which takes them back to the home page
*/ 

const MainStackNavigator = createStackNavigator({
		Home: HomeScreen,
		Profile: ProfileScreen
	},
	{
		initialRouteName: "Home",
		headerMode: 'none', // Otherwise there is white space
	}
);

export default MainStackNavigator;