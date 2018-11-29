import React from 'react';
import { View, StyleSheet, Text, TouchableHighlight, Image} from 'react-native';
import { Icon } from 'react-native-elements';

import PhotoBarGroup from './photobargroup'

export default class CommentView extends React.Component {
	render(){
		const comments = this.props.status;
		if (comments){
			return (
				<View style={styles.commentBox}>
					<PhotoBarGroup />
					
      			</View>
			);
		}
		return null;
	}
}

const styles = StyleSheet.create({
	commentBox : {
		backgroundColor: 'rgba(150,190,255, 0.9)',
		width: '100%',
		height: '30%',
		position: 'absolute',
		bottom: 0,
		borderBottomLeftRadius: 20,
		borderBottomRightRadius: 20,
	},

	tableStyle : {
		height: '70%',
		width: '100%',
		position: 'absolute',
		bottom: 0,
	}
})