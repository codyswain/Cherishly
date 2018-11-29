import React from 'react';
import { View, StyleSheet, Text, TouchableHighlight} from 'react-native';
import { Icon } from 'react-native-elements';

export default class PicButton extends React.Component {
	render(){
		return (
			<TouchableHighlight onPress={this.props.handler}>
				<View style={styles.picButton}>
					<Text>
						View Pic
					</Text>
				</View>
			</TouchableHighlight>
		);
	}
}

const styles = StyleSheet.create({
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