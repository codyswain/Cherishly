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
				<Navbar navigation={this.props.navigation} />

				<PopupWindow status={this.state.popupWindow} />

				<View style={styles.main}>
					<ScrollView>
					<Text>Cherishly is a photo sharing application!</Text>
					</ScrollView>
				</View>

				<AddButton handler={this.handleAddPhotoButton} />
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