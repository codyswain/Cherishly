import React from 'react';
import { View, StyleSheet, Text, TouchableHighlight, TextInput} from 'react-native';
import { Icon } from 'react-native-elements';

export default class PhotoCaption extends React.Component {
	constructor(props){
		super(props);
		this.handleFinishedCaption = this.handleFinishedCaption.bind(this);
	};

	state = {
		typingCaption: false,
		firstCaptionEntry: true, 
		captionText: 'Enter a caption here',
	};

	handleFinishedCaption = () =>{
		this.setState({typingCaption: false});
		this.props.handler(this.state.captionText);
	};

	render(){
		return (
			<View style={this.state.typingCaption
										? styles.captionBoxUp
										: styles.captionBoxDown}>
				<TextInput
	        style={styles.captionBody}
	        multiline={true}
	        blurOnSubmit={true}
	        value={this.state.captionText}
	        onFocus={() => this.setState({typingCaption:true, firstCaptionEntry: false, captionText:''})}
	        onChangeText={(text) => this.setState({captionText: text})}
	        onSubmitEditing={() => this.handleFinishedCaption()}
	      />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	captionBoxDown: {
		flex: 1,
		width: '100%',
		borderColor: 'lightgrey',
		borderWidth: 2,
		borderRadius: 4,
	},
	captionBoxUp: {
		position: 'absolute',
		bottom: 130,
		height: '100%',
		width: '100%',
		borderColor: 'lightgrey',
		borderWidth: 2,
		borderRadius: 4,
		zIndex: 1,
		backgroundColor: 'white'
	}
})