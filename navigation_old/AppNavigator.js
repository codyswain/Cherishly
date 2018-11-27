import React from 'react';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import MainStackNavigator from './MainStackNavigator';

const SwitchNavigator = createSwitchNavigator({
	/* 	
		Switch Navigators are used for Logging in Users (authentication)

		Switch Navigators allow only one page to be rendered and do
		do not store previous page history (no back button)
		https://reactnavigation.org/docs/en/auth-flow.html
	*/
	Main: MainStackNavigator,
});
const AppNavigator = createAppContainer(SwitchNavigator);
export default AppNavigator;