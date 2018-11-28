import React, {Component} from 'react';
import { ScrollView, StyleSheet, View, Button, Text, TouchableHighlight } from 'react-native';

import Fire from '../components/firebase/Firebase';
import Navbar from '../components/navbar';
import AddButton from '../components/addbutton';
import PopupWindow from '../components/popupwindow';

export default class HomeScreen extends Component {
	constructor(props) {
		super(props);
		this.handleAddPhotoButton = this.handleAddPhotoButton.bind(this)
	}

	// Handle state of popup window here
	state = {
		popupWindow: false,
	};

	// Event handler for add photo button
	// Pass this handler to child component
	handleAddPhotoButton = (e) => {
		e.preventDefault();
		this.setState(prevState => ({
  		popupWindow: !prevState.popupWindow
		}));
		// To upload to firebase
		// Fire.uploadData("sample", "test15", {"egf":"blah"});;
		console.log(this.state.popupWindow);
	}

	// Removes extra whitespace introducedß by navigation
	static navigationOptions = {
    	header: null,
  };

	render() {
		const {navigate} = this.props.navigation;
		return (
			<View style={{flex: 1}}>
<<<<<<< HEAD
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
=======
				<Navbar navigation={this.props.navigation} />

				<PopupWindow status={this.state.popupWindow} />

				<View style={styles.main}>
					<ScrollView>
>>>>>>> 692fb97385da21b16f18696b60550e459aecfa6d
					<Text>Cherishly is a photo sharing application!</Text>
					</ScrollView>
				</View>

<<<<<<< HEAD
				<View style={styles.addButton}>
					<Text>
						Add Photo
					</Text>
				</View>

				
=======
				<AddButton handler={this.handleAddPhotoButton} />
>>>>>>> 692fb97385da21b16f18696b60550e459aecfa6d
			</View>
		);
	}
}

const styles = StyleSheet.create({
	main : {
		flex: 9, 
		backgroundColor: 'white',
		justifyContent: 'center',
		alignItems: 'center'
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