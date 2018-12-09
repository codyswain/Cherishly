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
		imageURI: '', 
		userID: '',
		photoGroup: '',
		photoCaption: '',
		photoURL: '',
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
	};

	handlePhotoGroup = (group) => {
		this.setState({ photoGroup : group});
	};

	handlePhotoCaption = (caption) => {
		this.setState({ photoCaption: caption});
	};

	handlePhotoURL = (photoURL) => {
		this.setState({ photoURL: photoURL });
	};

	// Generate a uuid for firestore post id
	// NOTE: not genuine uuid
	uuid = () => {
		s4 = () => {
		  return Math.floor((1 + Math.random()) * 0x10000)
		    .toString(16)
		    .substring(1);
		}
		return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
	}

	handleSubmitButton = async () => {
		if (this.state.imageURI){
			url = await Fire.uploadPhoto(this.state.imageURI);
			var uid = this.uuid();
			var n = new Date();
			var d = n.getTime();
			await Fire.uploadData("posts", uid, {
				date: d,
				group: this.state.photoGroup,
				id: uid,
				src: url,
				user: "sgHSmNf7g6okDGATasV0", //random
			});
			await Fire.makeComment(uid, this.state.photoCaption);
		};
		this.props.handler(); //Close the window
	};

	render(){
		const popup = this.props.status;
		if (popup){
			return (
				<View style={styles.popupWindow}>
					<TouchableHighlight style={{position:'absolute', right: 5, top: 5, zIndex: 1}} onPress={this.props.handler}>
						<Icon name='close' size={30} color='white'/>
					</TouchableHighlight>

					<View style={styles.titleView}>
						<Text style={styles.title}> 
							Upload Photo
						</Text>
					</View> 

					<View style={styles.groupContainer}> 
						<PhotoGroup handler={this.handlePhotoGroup} />
					</View>

					<View style={styles.imageBox}>
						<UploadImage handler={this.handlePhotoURI} />
					</View> 

					<View style={styles.captionContainer}>
						<PhotoCaption handler={this.handlePhotoCaption} />
					</View>

					<View style={styles.submitButtonContainer}>
						<SubmitButton handler={this.handleSubmitButton}/>
					</View>

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
		borderRadius: 10,
		zIndex: 1,
		backgroundColor: 'rgba(50, 50, 50, .95)',
		borderColor: '#006699',
		borderWidth: 1,
		alignItems: 'center'
	},
	titleView: {
		flex: 1,
		backgroundColor: '#006699',
		borderTopLeftRadius: 8,
		borderTopRightRadius: 8,
		width: '100%',
		alignItems: 'center',
	},
	title: {
		color: 'white',
		fontSize: 40,
		fontFamily: 'Gill Sans'
	},
	groupContainer: {
		flex: .6,
		width: '94%',
		marginTop: '1%',
		marginBottom: '1%',
	},
	imageBox: {
		flex: 5,
		width: '94%',
		borderRadius: 4,
	},
	captionContainer: {
		flex: 2,
		width: '94%',
		marginTop: '1%',
		marginBottom: '1%',
	},
	submitButtonContainer: {
		flex: 1,
		marginBottom: '2%',
	}
})