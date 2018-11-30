import React from 'react';
import { View, StyleSheet, Text, TouchableHighlight, Image, ListView, TextInput, Keyboard} from 'react-native';
import { Icon } from 'react-native-elements';

import PhotoBarGroup from './photobargroup';
import Fire from '../firebase/Firebase';

export default class CommentView extends React.Component {

	constructor(props) {
    super(props);

  	this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

	this.state = {
		comments: this.ds,
		commentText: 'Write a comment...',
		commenting: false ,
		doneLoading: false
		
	};

	};

	componentWillMount() {
		this.setState({doneLoading: false});
    	this.getComments();
    };

    getComments() {
    	Fire.downloadComments(this.props.postID).then (c => {
    		this.setState({comments:this.ds.cloneWithRows(c), doneLoading:true});
    	});
    };

    submitButton() {
    	Keyboard.dismiss();
    	this.makeComment();
    }

    makeComment() {
    	var text = this.state.commentText;
    	this.setState({commenting: false, commentText: 'Make a comment'})
    	Fire.makeComment(this.props.postID, text).then( () => {
    		this.getComments();
    	});
    }


	render(){
		if (this.state.doneLoading) {
			return (
				<View style={this.state.commenting
                            ? styles.commentBoxUp
                            : styles.commentBoxDown}>
					<PhotoBarGroup data={this.props.user} post={this.props.post}/>
					<ListView style={styles.container} dataSource={this.state.comments} 
						renderRow={(data) =>
							<View style={{width: '100%', height: 60, marginBottom:15,  backgroundColor:'white', borderRadius: 2}}> 
								<Text style={{position: 'absolute', left:5, top:5, fontFamily: 'Gill Sans'}}>{data.name}</Text>
								<Text style={{position: 'absolute', left:10, bottom:5, width: '70%', fontFamily: 'Gill Sans'}}>{data.text}</Text>
								<Text style={{position: 'absolute', right:5, bottom:5, fontFamily: 'Gill Sans'}}>{data.date}</Text>
							</View>
						}
					/>

					<TextInput style={styles.input} value={this.state.commentText} onChangeText={(text) => this.setState({commentText: text})}
					onSubmitEditing={() => this.makeComment()} onFocus={() => this.setState({commenting:true, commentText:''})}/>

					<TouchableHighlight style={{position:'absolute', right: 5, top: 5}} onPress={this.props.handler}>
 						<Icon name='close' size={20} color='white'/>
 					</TouchableHighlight>
 					<View style={styles.submitButton}>
 						<TouchableHighlight  onPress={() => this.submitButton()}>
 							<Text style={{fontFamily: 'Gill Sans'}}>Submit</Text>
 						</TouchableHighlight>
 					</View>
      			</View>
			);
		}
		else {
			return null;
		}
	
	}
}

const styles = StyleSheet.create({
	commentBoxDown : {
		backgroundColor: 'rgba(200,200,200, 0.5)',
		width: '100%',
		height: '50%',
		position: 'absolute',
		bottom: 0,
		borderBottomLeftRadius: 2,
		borderBottomRightRadius: 2,
	},

	commentBoxUp : {
		backgroundColor: 'rgba(200, 200,200, 0.5)',
		width: '100%',
		height: '50%',
		position: 'absolute',
		bottom: '35%',
		borderBottomLeftRadius: 2,
		borderBottomRightRadius: 2,
	},

	container: {
    	padding: 12,
    	position: 'absolute',
    	top: 60,
    	width: '100%',
    	height: '60%',
    	//borderBottomColor: '#eeeeee',
    	//borderBottomWidth: 1
  	},

  	input: {
  		position: 'absolute',
  		bottom: 10,
  		left: 15,
  		width: '70%',
  		height: 40,
  		backgroundColor: 'white',
  		borderRadius: 2,
		fontFamily: 'Gill Sans',
		paddingLeft: 5
  	},

  	submitButton : {
  		backgroundColor: 'white',
  		position:'absolute', 
  		right: 10, 
  		bottom: 10,
  		width: '20%',
		height: 40,
		justifyContent: 'center',
		alignItems: 'center',
    	borderRadius: 2,
  	}
})