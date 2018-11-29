import React from 'react';
import { View, StyleSheet, Text, TouchableHighlight, Image, ListView, TextInput} from 'react-native';
import { Icon } from 'react-native-elements';

import PhotoBarGroup from './photobargroup'

export default class CommentView extends React.Component {

	constructor(props) {
    super(props);
    

  	const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

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
		data: ds.cloneWithRows([com1, com2]),
		text: "Make a comment",
		commenting: false 
		
	};

	};



	render(){
		const comments = this.props.status;
		if (comments){
			return (
				<View style={this.state.commenting
                            ? styles.commentBoxUp
                            : styles.commentBoxDown}>
					<PhotoBarGroup />
					<ListView style={styles.container} dataSource={this.state.data} 
						renderRow={(data) =>
							<View style={{width: '100%', height: 60, marginBottom:15, borderBottomColor: 'black', borderBottomWidth: 1}}> 
								<Text style={{position: 'absolute', left:0, top:0}}>{data.name}</Text>
								<Text style={{position: 'absolute', left:10, bottom:0, width: '70%'}}>{data.comment}</Text>
								<Text style={{position: 'absolute', right:5, bottom:0}}>{data.date}</Text>
							</View>
						}
					/>

					<TextInput style={styles.input} value={this.state.text} onChangeText={(text) => this.setState({text})}
					onFocus={() => this.setState({commenting:true, text:''})}/>

					<TouchableHighlight style={{position:'absolute', right: 5, top: 5}} onPress={this.props.handler}>
 						<Icon name='close' size={20} color='white'/>
 					</TouchableHighlight>
      			</View>
			);
		}
		return null;
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