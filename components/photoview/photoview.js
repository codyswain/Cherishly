import React from 'react';
import { View, StyleSheet, Text, TouchableHighlight, Image} from 'react-native';
import { Icon } from 'react-native-elements';

//import Fire from '../firebase/Firebase';

import CommentView from './comments';
import PhotoBar from './photobar';

export default class PhotoView extends React.Component {
	constructor(props) {
    super(props);
    this.handleViewCommentsButton = this.handleViewCommentsButton.bind(this)
    this.handleHideCommentsButton = this.handleHideCommentsButton.bind(this)
  }

  // Handle state of commentview
  state = {
    photobar: true,
    comments: false,
    post: {}
  };

  //pull data from Firebase


  // Event handler for view comments button
  // Pass this handler to child component
  handleViewCommentsButton = (e) => {
    e.preventDefault();
    this.setState({comments:true, photobar:false});
    console.log(this.state.comments);
  };

  // Event handler for hide comments button
  // Pass this handler to child component
  handleHideCommentsButton = (e) => {
    e.preventDefault();
    this.setState({comments:false, photobar:true});
    console.log(this.state.comments);
  };

	render(){
		const photo = this.props.status;
		if (photo){
			return (
				<View style={styles.photoView}>
					<Image source={{uri:"https://firebasestorage.googleapis.com/v0/b/cherishly-412dd.appspot.com/o/lake.jpg?alt=media&token=1bd79c48-6858-4b32-82cd-d64baf36e9f5"}} style={styles.picture}/>
					<TouchableHighlight style={{position:'absolute', right: 5, top: 5}} onPress={this.props.handler}>
						<Icon name='close' size={40} color='white'/>
					</TouchableHighlight>
      				<PhotoBar status={this.state.photobar} handler={this.handleViewCommentsButton} />
      				<CommentView status={this.state.comments} />
      			</View>
			);
		}
		return null;
	}
}

const styles = StyleSheet.create({
	photoView : {
		left: 15,
		right: 15,
		top: 100,
		bottom: 40,
		position: 'absolute',
		borderRadius: 20,
		zIndex: 1,
		backgroundColor: 'black',
		borderColor: 'black',
		borderWidth: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},

	picture : {
		width:'100%',
		height:'100%',
    	overflow: 'hidden',
    	position: 'absolute',
    	left: 0,
		right: 0,
		top: 0,
		borderRadius: 20,
	},

	photoInfoBar : {
		backgroundColor: '#96beff',
		width: '100%',
		height: '15%',
		position: 'absolute',
		bottom: 0,
		borderBottomLeftRadius: 20,
		borderBottomRightRadius: 20,
		borderTopColor: 'black',
		borderTopWidth: 1,
		textAlign: 'center',
		fontSize: 32,
    	//fontFamily: "Oxygen", "Karla", "Lato", "Raleway"
	},

})