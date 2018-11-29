import React from 'react';
import { View, StyleSheet, Text, TouchableHighlight, Image, ListView, TextInput} from 'react-native';
import { Icon } from 'react-native-elements';

import PhotoBarGroup from './photobargroup';
import Fire from '../firebase/Firebase';

export default class CommentView extends React.Component {

	constructor(props) {
    super(props);

    

  	this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

  	const com1 = {
			name: "Jane Doe",
			comment: "This day was so much fun I had such a great time!!",
			date: "Yesterday"
		};

	const com2 = {
			name: "Alex Longerbeam3",
			comment: "Something 3 something",
			date: "Today"
		};

	this.state = {
		comments: this.ds,
		commentText: 'Make a comment',
		commenting: false ,
		doneLoading: false
		
	};

	};

	componentWillMount() {
    	this.getComments()
    };

    getComments() {
    	this.setState({doneLoading: false})
    	Fire.downloadComments(this.props.postID).then (c => {
    		this.setState({comments:this.ds.cloneWithRows(c), doneLoading:true});
    	});
    };

    makeComment() {
    	console.log("Making comment");
    	var text = this.state.commentText;
    	this.setState({commenting: false, commentText: 'Make a comment'})
    	Fire.makeComment(this.props.postID, this.state.commentText).then( () => {
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
							<View style={{width: '100%', height: 60, marginBottom:15, borderBottomColor: 'black', borderBottomWidth: 1}}> 
								<Text style={{position: 'absolute', left:0, top:0}}>{data.name}</Text>
								<Text style={{position: 'absolute', left:10, bottom:0, width: '70%'}}>{data.text}</Text>
								<Text style={{position: 'absolute', right:5, bottom:0}}>{'Yesterday'}</Text>
							</View>
						}
					/>

					<TextInput style={styles.input} value={this.state.commentText} onChangeText={(text) => this.setState({commentText: text})}
					onSubmitEditing={() => this.makeComment()} onFocus={() => this.setState({commenting:true, commentText:''})}/>

					<TouchableHighlight style={{position:'absolute', right: 5, top: 5}} onPress={this.props.handler}>
 						<Icon name='close' size={20} color='white'/>
 					</TouchableHighlight>
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
		backgroundColor: 'rgba(150,190,255, 0.9)',
		width: '100%',
		height: '50%',
		position: 'absolute',
		bottom: 0,
		borderBottomLeftRadius: 20,
		borderBottomRightRadius: 20,
	},

	commentBoxUp : {
		backgroundColor: 'rgba(150,190,255, 0.9)',
		width: '100%',
		height: '50%',
		position: 'absolute',
		bottom: 200,
		borderBottomLeftRadius: 20,
		borderBottomRightRadius: 20,
	},

	container: {
    	padding: 12,
    	position: 'absolute',
    	top: 60,
    	width: '100%',
    	height: '60%',
  	},

  	input: {
  		position: 'absolute',
  		bottom: 5,
  		left: 5,
  		width: '80%',
  		height: 30,
  		backgroundColor: 'white'
  	}
})