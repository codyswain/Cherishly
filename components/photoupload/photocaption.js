import React from 'react';
import { View, StyleSheet, Text, TouchableHighlight, TextInput} from 'react-native';
import { Icon } from 'react-native-elements';

export default class PhotoCaption extends React.Component {
	render(){
		return (
			<View style={{flex:2, marginTop: 20}}>
					<View style={{flex:1, margin: 10}}>
						<Text style={{fontFamily: 'Gill Sans'}}>Enter a caption</Text>
						<TextInput
			        style={{width: 350, height: '60%', marginTop: 10, borderColor: 'gray', borderWidth: 2, borderRadius: 10}}
			        onChangeText={(text) => this.props.handler({text})}
			      />
					</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	caption: {
		flex: 2,
		alignSelf: 'stretch',
	},
})