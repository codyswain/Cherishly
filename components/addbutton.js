import React from 'react';
import { View, StyleSheet, Text, TouchableHighlight, LayoutAnimation } from 'react-native';
import { Icon } from 'react-native-elements';

export default class AddButton extends React.Component {
	render(){
		return (
			<TouchableHighlight underlayColor="transparent" onPress={this.props.handler}>
				<View style={styles.addButton}>
					<Icon name='add-a-photo' size={30} color='white'/>
				</View>
			</TouchableHighlight>
		);
	}
}

const styles = StyleSheet.create({

addButton: {
  	position: 'absolute',
  	bottom: 20,
  	right: 20,
  	width: 60,
  	height: 60,
  	zIndex: 1,
  	justifyContent: 'center',
  	alignItems: 'center',
  	borderRadius: 50, 
	backgroundColor: '#006699'
  },

addButtonText: {
	color: '#ffffff',
	fontSize: 15,
	fontFamily: 'Gill Sans',
	textAlign: 'center',
}
})