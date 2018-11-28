import React from 'react';
import { View, StyleSheet, Text, TouchableHighlight} from 'react-native';
import { Icon } from 'react-native-elements';

export default class PopupWindow extends React.Component {
	render(){
		const popup = this.props.status;
		if (popup){
			return (
				<View style={styles.popupWindow} />
			);
		}
		return null;
	}
}

const styles = StyleSheet.create({
	popupWindow : {
		left: 4,
		right: 4,
		top: 100,
		bottom: 150,
		position: 'absolute',
		borderRadius: 10,
		zIndex: 1,
		backgroundColor: 'black',
		opacity: .5,
		borderColor: 'black',
		borderWidth: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
})