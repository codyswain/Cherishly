import React from 'react';
import { Button, StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { createStackNavigator, createAppContainer} from 'react-navigation';
import HomeScreen from './screens/HomeScreen'
import ProfileScreen from './screens/ProfileScreen'
import SettingsScreen from './screens/SettingsScreen'


const AppStackNavigator = createStackNavigator({
  // For navigation flow with authetication
  // use https://github.com/react-navigation/react-navigation/issues/1979
  Home: { screen: HomeScreen },
  Profile: { screen: ProfileScreen },
  Settings: { screen: SettingsScreen}
});
const AppContainer = createAppContainer(AppStackNavigator);


export default class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.safeArea}>
        <AppContainer />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#ddd'
  }
})