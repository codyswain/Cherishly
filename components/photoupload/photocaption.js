import React from 'react';
import { View, StyleSheet, Text, TouchableHighlight, TextInput} from 'react-native';
import { Icon } from 'react-native-elements';

export default class PhotoCaption extends React.Component {
	render(){
		return (
			<View style={styles.container}>
				<Text style={styles.captionTitle}>Enter a caption</Text>
				<TextInput
	        style={styles.captionBody}
	        onChangeText={(text) => this.props.handler({text})}
	        multiline={true}
	        blurOnSubmit={true}
	      />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	captionTitle: {
		flex: 1,
		fontFamily: 'Gill Sans',
		left: 0,
	},
	captionBody: {
		flex: 4,
		width: '100%',
		borderColor: 'lightgrey',
		borderWidth: 2,
		borderRadius: 4,
	},
})