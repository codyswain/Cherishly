import React, {Component} from 'react';
import { ScrollView, StyleSheet, View, Button, Text, TouchableHighlight } from 'react-native';

import Fire from '../components/firebase/Firebase';
import Navbar from '../components/navbar';
import AddButton from '../components/addbutton';
import PopupWindow from '../components/popupwindow';
import PicButton from '../components/picbutton';
import PhotoView from '../components/photoview/photoview';

export default class HomeScreen extends Component {
	constructor(props) {
		super(props);
		this.handleAddPhotoButton = this.handleAddPhotoButton.bind(this)
		this.handleShowPhotoButton = this.handleShowPhotoButton.bind(this)
	}

	// Handle state of popup window here
	state = {
		popupWindow: false,
		photoView: false,
		photoViewData: ''
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

  handleShowPhotoButton = (e) => {
		e.preventDefault();
		this.setState(prevState => ({
  			photoView: !prevState.photoView,
  			photoViewData: '4GGXSfwvebW39yEj4ZRG'
		}));
		// To upload to firebase
		// Fire.uploadData("sample", "test15", {"egf":"blah"});;
		console.log(this.state.photoView);
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

				{this.state.photoView ? 

				<PhotoView status={this.state.photoView} handler={this.handleShowPhotoButton} data={this.state.photoViewData}/>
				:
				<View></View>
				}

				<View style={styles.main}>
					<ScrollView>
					<Text>Cherishly is a photo sharing application!</Text>
					</ScrollView>
				</View>

				<AddButton handler={this.handleAddPhotoButton} />
				<PicButton handler={this.handleShowPhotoButton} />
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
  },

  picButton: {
  	position: 'absolute',
  	bottom: 30,
  	left: 30,
  	width: 80,
  	height: 80,
  	zIndex: 1,

  	justifyContent: 'center',
  	alignItems: 'center',
  	borderRadius: 50, 
  	backgroundColor: '#F35F64',
  }

})