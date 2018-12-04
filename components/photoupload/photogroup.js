import React from 'react';
import { View, StyleSheet, Text, TouchableHighlight} from 'react-native';
import { Icon } from 'react-native-elements';

export default class PhotoGroup extends React.Component {
	render(){
		return (
			<View style={styles.container}> 
				<TouchableHighlight onPress={this.props.handler}>
					<View style={styles.groupSelection}>
							<Text style={{fontFamily: 'Gill Sans'}}>Enter groups here</Text>
					</View>
				</TouchableHighlight>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	groupSelection: {
		flex: 1,
	},
})