import React, {Component} from 'react';
import { ScrollView, StyleSheet, View, Button, Text, TouchableHighlight } from 'react-native';
import { Icon } from 'react-native-elements';

import { init as firebaseInit, putData } from '../components/firebase/Firebase';

export default class HomeScreen extends Component {
	constructor(props){
		super(props);
		firebaseInit();
	}

	static navigationOptions = {
    header: null,
  };

	render() {
		const {navigate} = this.props.navigation;
		return (
			// To-do: Make the top navbar a component
			<View style={{flex: 1}}>

				<View style={styles.navbar}>
					<View style={styles.navbarButton}>
						<TouchableHighlight onPress={() => this.props.navigation.push('Profile')}>
							<Icon name='person' size={40} color='white'/>
						</TouchableHighlight>
		      </View>

		      <View style={styles.navbarTitle}>
		      	<Text style={styles.navbarTitleText}>Cherishly</Text>
		      </View>

					<View style={styles.navbarButton}>
						<TouchableHighlight onPress={() => this.props.navigation.push('Settings')}>
							<Icon name='settings' size={40} color='white'/>
						</TouchableHighlight>
			    </View>
				</View>

				<View style={{
					flex: 9, 
					backgroundColor: 'white',
					justifyContent: 'center',
					alignItems: 'center'
				}}>
					<Text>Cherishly is a photo sharing application!</Text>
				</View>


				<TouchableHighlight onPress={() => putData()}>
					<View style={styles.addButton}>
						<Text>
							Add Photo
						</Text>
					</View>
				</TouchableHighlight>

			</View>
		);
	}
}



const styles = StyleSheet.create({
  navbar: {
  	flex: 1, 
  	flexDirection: 'row', 
  	backgroundColor: '#F35F64'
  },
  navbarButton: {
		flex: 1, 
		justifyContent: 'center',
		alignItems: 'center'
  },
  navbarButtonText: {
		color: 'black',
  	fontFamily: 'Arial',
  	fontSize: 15,
  },
  navbarTitle: {
  	flex: 3, 
  	justifyContent: 'center', 
  	alignItems: 'center',
  },
  navbarTitleText: {
  	color: 'black',
  	fontFamily: 'Arial',
  	fontSize: 30,
  },

  addButton: {
  	position: 'absolute',
  	bottom: 30,
  	right: 30,
  	width: 80,
  	height: 80,
  	zIndex: 1,

  	justifyContent: 'center',
  	alignItems: 'center',
  	borderRadius: 50, 
  	backgroundColor: '#F35F64',
  }

})