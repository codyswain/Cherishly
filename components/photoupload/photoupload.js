import React from 'react';
import { View, StyleSheet, Text, TouchableHighlight, Platform} from 'react-native';
import { Icon } from 'react-native-elements';
import Fire from '../firebase/Firebase';

import PhotoGroup from './photogroup';
import SubmitButton from './submitbutton';
import PhotoCaption from './photocaption';
import UploadImage from './imagepicker';


export default class PhotoUpload extends React.Component {
	constructor(props) {
		super(props);
		this.handlePhotoURI = this.handlePhotoURI.bind(this);
		this.handlePhotoCaption = this.handlePhotoCaption.bind(this);
		this.handlePhotoGroup = this.handlePhotoGroup.bind(this);
		this.handleSubmitButton = this.handleSubmitButton.bind(this);
	};

	state = {
		imageURI: null, 
		data: {
			userID: null, //hard code this
			photoGroup: null,
			photoCaption: null,
			photoURL: null,
		}
	};

	/* --- Flow ------------
		user uploads photo
		user sets image in image component, uri is returned to photoupload state
		user sets caption in caption component, which is returned to photoupload state
		user sets group in group component, which is returned to photoupload state
	----------------------- */

	/* --- SUBMIT BUTTON ---
	When user presses submit
	 	this.state.imageURI uploaded to firebase.storage() which returns url 
	 	url appended to this.data.photoURL
		this.data uploaded to firebase.firestore()
	----------------------- */


	handlePhotoURI = (photoURI) => {
		this.setState({ imageURI: photoURI });
		console.log(this.state.imageURI)
	};

	handlePhotoGroup = (photoGroup) => {
		this.setState({ data : { photoGroup : photoGroup}});
		console.log("Group button pressed")
	};

	handlePhotoCaption = (photoCaption) => {
		this.setState({ data : { photoCaption: photoCaption }});
		console.log(this.state.data.photoCaption);
	};

	handlePhotoURL = (photoURL) => {
		this.setState({ data : { photoURL: photoURL }});
	};

	handleSubmitButton = async (e) => {
		e.preventDefault();
		console.log("Submit button pressed");
		if (this.state.imageURI){

			console.log(this.state.imageURI)

			uploadResponse = await Fire.uploadPhoto(this.state.imageURI);
			console.log("This")
			console.log(uploadResponse);
			// uploadResponse = await Fire.uploadImage(this.state.imageURI);
			// uploadResult = await uploadResponse.json();

			if (this.state.data.userID && this.state.data.photoURL){
				// Upload this.state.data to firestore
			};
		};
	};

	render(){
		const popup = this.props.status;
		if (popup){
			return (
				<View style={styles.popupWindow}>
					<TouchableHighlight style={{position:'absolute', right: 5, top: 5, zIndex: 1}} onPress={this.props.handler}>
						<Icon name='close' size={40} color='black'/>
					</TouchableHighlight>

					<View style={styles.titleView}>
						<Text style={styles.title}> 
							Upload Photo
						</Text>
					</View> 

					<PhotoGroup handler={this.handlePhotoGroup} />

					<View style={styles.imageBox}>
						<UploadImage handler={this.handlePhotoURI} />
					</View> 

					<PhotoCaption handler={this.handlePhotoCaption} />

					<SubmitButton handler={this.handleSubmitButton} />

				</View>
			);
		}
		return null;
	}
}

const styles = StyleSheet.create({
	popupWindow : {
		left: 15,
		right: 15,
		top: 100,
		bottom: 30,
		position: 'absolute',
		borderRadius: 20,
		zIndex: 1,
		backgroundColor: 'white',
		borderColor: 'black',
		borderWidth: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	titleView: {
		flex: 1,
	},
	title: {
		fontSize: 40,
		fontFamily: 'Gill Sans'
	},
	imageBox: {
		width: 350, 
		height: 350,
		borderColor: 'black',
		borderWidth: 2,
		borderRadius: 10,
	},
	submit: {
		flex: 2,
		alignSelf: 'stretch',
		justifyContent: 'center',
		alignItems: 'center'
	},
	submitButton: {
		height: 50,
		width: 200,
		borderColor: 'black',
		borderWidth: 2,
		borderRadius: 10,
		justifyContent: 'center',
		alignItems: 'center'
	}
})