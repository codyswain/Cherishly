import React, {Component} from 'react';
import { ScrollView, StyleSheet, View, Button, Text, TouchableHighlight } from 'react-native';
import { Icon } from 'react-native-elements';

export default class SettingsScreen extends Component {
	static navigationOptions = {
	    header: null,
	  };

	render() {
		const {navigate} = this.props.navigation;
		return (
			<View style={{flex: 1}}>
				<View style={styles.navbar}>
					<View style={styles.navbarButton}>
						<TouchableHighlight underlayColor="transparent" onPress={() => this.props.navigation.goBack()}>
							<Icon name='arrow-back' size={40} color='white'/>
						</TouchableHighlight>
					</View>

					<View style={styles.navbarTitle}>
						<Text style={styles.navbarTitleText}>Settings</Text>
					</View>

					<View style={styles.navbarButton}>
					</View>
				</View>

				<View style={{
					flex: 10, 
					backgroundColor: 'white',
					alignItems: 'center',
					justifyContent: 'center'
				}}>
					<Text>There's nothing here yet</Text>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	navbar: {
  		flex: 1, 
  		flexDirection: 'row', 
  		backgroundColor: '#006699'
  	},
  	navbarButton: {
		flex: 1, 
		justifyContent: 'center',
		alignItems: 'center'
	},
	navbarTitle: {
	  	flex: 3, 
	  	justifyContent: 'center', 
	  	alignItems: 'center',
	},
	navbarTitleText: {
	  	color: 'white',
	  	fontFamily: 'Optima-Bold',
	  	fontSize: 30,
	},
})