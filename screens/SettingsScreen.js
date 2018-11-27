import React, {Component} from 'react';
import { ScrollView, StyleSheet, View, Button, Text } from 'react-native';

export default class SettingsScreen extends Component {
	static navigationOptions = {
	    header: null,
	  };

	render() {
		const {navigate} = this.props.navigation;
		return (
			<View style={{flex: 1}}>
				<View style={{flex: 1, alignItems: 'left', justifyContent: 'center', backgroundColor: '#F35F64'}}>
					<Button
			          title="Go back"
			          onPress={() => this.props.navigation.goBack()}
			        />
				</View>

				<View style={{
					flex: 9, 
					backgroundColor: 'white',
					alignItems: 'center',
					justifyContent: 'center'
				}}>
					<Text>Settings Screen</Text>
				</View>
			</View>
		);
	}
}