import React from 'react';
import { View, StyleSheet, Text, TouchableHighlight} from 'react-native';
import { Icon } from 'react-native-elements';

export default class AddButton extends React.Component {
	render(){
		return (
			<TouchableHighlight onPress={this.props.handler}>
				<View style={styles.addButton}>
					<Text>
						Add Photo
					</Text>
				</View>
			</TouchableHighlight>
		);
	}
}

const styles = StyleSheet.create({
	addButton: {
  	position: 'absolute',
  	bottom: 30,
  	right: 30,
  	width: 80,
  	height: 80,
  	zIndex: 1,

  	justifyContent: 'center',
  	alignItems: 'center',
  	borderRadius: 50, 
  	backgroundColor: '#F35F64',
  }
})