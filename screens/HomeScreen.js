import React, {Component} from 'react';
import { Alert, ScrollView, StyleSheet, View, Button, Text, TouchableHighlight, FlatList, Picker } from 'react-native';
import Fire from '../components/firebase/Firebase';
import Navbar from '../components/navbar';
import AddButton from '../components/addbutton';
import PopupWindow from '../components/popupwindow';
import Post from '../components/post';
import ModalDropdown from 'react-native-modal-dropdown';
import {Dropdown} from 'react-native-material-dropdown';

export default class HomeScreen extends Component {
	constructor(props) {
		super(props);
		this.handleAddPhotoButton = this.handleAddPhotoButton.bind(this);
		this.getDropdownVal = this.getDropdownVal.bind(this);
	}

	// Handle state of popup window here
	state = {
		popupWindow: false,
		posts: [],
	};

	// Event handler for add photo button
	// Pass this handler to child component
	handleAddPhotoButton = (e) => {
		e.preventDefault();
		this.setState(prevState => ({
  		popupWindow: !prevState.popupWindow
		}));
		// To upload to firebase
		// Fire.uploadData("sample", "test15", {"egf":"blah"});;
		console.log(this.state.popupWindow);
	}

	getDropdownVal(selectedVal){	
		this.doStuff(selectedVal);
	}

	doStuff(val){
		// make call to firebase
		let tempData = [{key: 'a', group: 'Roommates'}, {key: 'b', group: 'Roommates'}, {key: 'c', group: 'Family'}, {key: 'd', group: 'soccer team 2018'}];
		var revisedData = [];
		revisedData = tempData.filter(function (item){return item.group == val});
		console.log(revisedData[0]);
		this.setState({posts: revisedData});
	}


	// Removes extra whitespace introducedß by navigation
	static navigationOptions = {
    	header: null,
  	};

	render() {
		const {navigate} = this.props.navigation;
		let myData = [
			{value: 'Roommates',}, 
			{ value: 'Family', }, 
			{ value: 'soccer team 2018', }];
		return (
			<View style={{flex: 1}}>
				<Navbar navigation={this.props.navigation} />
				<Dropdown label='Filter' data={myData} onChangeText={value => this.getDropdownVal(value) }/>				
				<PopupWindow status={this.state.popupWindow} />

				<View style={styles.main}>				
					<ScrollView>
					<FlatList
  						data={this.state.posts}
  						renderItem={ ({item}) => <Post link='https://spaceplace.nasa.gov/review/sunburn/sunburn1.en.png' group={item.group} /> }
					/>
					</ScrollView>
				</View>

				<AddButton handler={this.handleAddPhotoButton} />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	main: {
		flex: 9, 
		backgroundColor: 'white',
		justifyContent: 'center',
		alignItems: 'center',
	},

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
	},

	dropdown: {
		flex: 1,
		textAlign: 'center',
		color: '#ffffff',
		fontSize: 50,
	},

	dText: {
		backgroundColor: '#F35F64',
		color: '#ffffff',
		fontSize: 15,
		textAlign: 'center',
		padding: 5,
	},

	dropdownText: {
		width: 400,
		fontFamily: 'System',
		color: '#000000',
		fontSize: 12,
		textAlign: 'center',
	}
})