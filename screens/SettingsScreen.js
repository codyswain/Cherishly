import React, {Component} from 'react';
import { ScrollView, StyleSheet, View, Button, Text } from 'react-native';
import { Icon } from 'react-native-elements';

export default class SettingsScreen extends Component {
	static navigationOptions = {
	    header: null,
	  };

	render() {
		const {navigate} = this.props.navigation;
		return (
			<View style={{flex: 1}}>
				<View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#F35F64'}}>
					<Button style={{align: 'left', fontFamily: 'Gill Sans', justifyContent: 'center'}}
			          title="Home"
			          color="white"
			          onPress={() => this.props.navigation.goBack()}
			          fontFamily="Gill Sans"
			        /> 
			        <Icon name='settings' size={40} color='white' style={{alignItems: 'center'}}/>
			        <Button style={{align: 'left'}}
			          title="Home"
			          color="#F35F64"
			          fontFamily="Gill Sans"
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