import React from 'react';
import { View, StyleSheet, Text, TouchableHighlight, Button} from 'react-native';
import { Icon } from 'react-native-elements';
import {Dropdown} from 'react-native-material-dropdown';

class ButtonComponent extends React.Component {
	render() {
	  return (
      <Button onClick={ console.log(this.props.text) }>
        <Text>{ this.props.text }</Text>
      </Button>
	  );
	}
}


export default class PhotoGroup extends React.Component {
	constructor(props){
		super(props);
		this.getGroupSelection = this.getGroupSelection.bind(this);
	};

	state = {
		group: '',
	};

	getGroupSelection = (group) => {
		this.setState({group: group});
		this.props.handler(this.state.group);
	};

	render(){
		let myData = [
			{ value: 'All',},
			{ value: 'Roommates',}, 
			{ value: 'Family', }, 
			{ value: 'Soccer', },
			{ value: 'Me', }];
		return (
			<View style={styles.container}> 
				<View style={styles.groupSelection}>
					<Dropdown
						  data={myData} 
						  value="All" 
						  onChangeText={value => this.getGroupSelection(value) } 
						  fontSize={13}
						  labelFontSize={13} 
						  selectedItemColor="#F35F64" 
						  shadeOpacity={0.3}
						  baseColor="#888888"
						  textColor="#F35F64"
						  dropdownPosition={0}
						  itemCount={5}
						  style={{textAlign: 'center'}}
						  itemTextStyle={{textAlign: 'center'}}
					/>
				</View>
			</View>
		);
	}
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	groupSelection: {
		bottom: 26,
		position: 'relative',
		width: 160,
		height: 60,
		alignSelf: 'center',
		flex: 1,
		height: '100%',
	},
})