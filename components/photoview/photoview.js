import React from 'react';
import { View, StyleSheet, Text, TouchableHighlight, Image} from 'react-native';
import { Icon } from 'react-native-elements';

import Fire from '../firebase/Firebase';

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
    comments: false,
    post: {},
    user: {},
    doneLoading: false
  };

  componentWillMount() {
  	this.getPost().then(() => {
  		this.getUser();
  	});
  };

  //pull data from Firebase
  getPost = async () => {
  	await Fire.downloadData('posts', this.props.postID).then(p => {
  		this.setState({post: p})
  	})
  	
  };

  getUser = async () => {
  	await Fire.downloadData('users', this.state.post.user).then(u => {
  		this.setState({user: u, doneLoading:true});
  	})
  }

  // Event handler for view comments button
  // Pass this handler to child component
  handleViewCommentsButton = (e) => {
    e.preventDefault();
    this.setState({comments:true});
  };

  // Event handler for hide comments button
  // Pass this handler to child component
  handleHideCommentsButton = (e) => {
    e.preventDefault();
    this.setState({comments:false});
  };

	render(){

		if (this.state.doneLoading) {
		return (
				<View style={styles.photoView}>
					<Image source={{uri:this.state.post.src}} style={styles.picture}/>
					<TouchableHighlight underlayColor="transparent" style={{position:'absolute', right: 5, top: 5}} onPress={this.props.handler}>
						<Icon name='close' size={25} color='white'/>
					</TouchableHighlight>
					{this.state.comments ? 
					<CommentView handler={this.handleHideCommentsButton} post={this.state.post} user={this.state.user} postID={this.props.postID}/>
					:
      				<PhotoBar handler={this.handleViewCommentsButton} data={this.state.user} post={this.state.post}/>
      			}
      				
      			</View>
      			
      		
			);
		}
		else {
			return null;
		}

		}
}

const styles = StyleSheet.create({
	photoView : {
		left: 15,
		right: 15,
		top: 100,
		bottom: 40,
		position: 'absolute',
		borderRadius: 10,
		zIndex: 1,
		backgroundColor: 'white',
		borderColor: '#eeeeee',
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
		borderRadius: 10,
	},

	photoInfoBar : {
		backgroundColor: '#96beff',
		width: '100%',
		height: '15%',
		position: 'absolute',
		bottom: 0,
		borderBottomLeftRadius: 10,
		borderBottomRightRadius: 10,
		borderTopColor: '#eeeeee',
		borderTopWidth: 1,
		textAlign: 'center',
		fontSize: 32,
	},

})