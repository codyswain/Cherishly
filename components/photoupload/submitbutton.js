import React from 'react';
import { View, StyleSheet, Text, TouchableHighlight} from 'react-native';
import { Icon } from 'react-native-elements';

export default class SubmitButton extends React.Component {
	render(){
		return (
			<View style={{flex:1}}>
				<TouchableHighlight onPress={this.props.handler}>
					<View style={styles.submitButton}>
							<Text style={{fontFamily: 'Gill Sans', color: 'white'}}>Submit</Text>
					</View>
				</TouchableHighlight>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	submitButton: {
		height: 50,
		width: 200,
		backgroundColor: '#F35F64',
		borderRadius: 20,
		justifyContent: 'center',
		alignItems: 'center'
	}
})