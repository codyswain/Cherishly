import React, {Component} from 'react';
import { Alert, ScrollView, StyleSheet, View, Button, Text, TouchableHighlight, FlatList, Image } from 'react-native';
import Fire from '../components/firebase/Firebase';
import Navbar from '../components/navbar';
import AddButton from '../components/addbutton';
import PopupWindow from '../components/popupwindow';
import Post from '../components/post';
import {Dropdown} from 'react-native-material-dropdown';
import PhotoView from '../components/photoview/photoview';

export default class HomeScreen extends Component {
	constructor(props) {
		super(props);
		this.handleAddPhotoButton = this.handleAddPhotoButton.bind(this);
		this.getDropdownVal = this.getDropdownVal.bind(this);
		this.handleAddPhotoButton = this.handleAddPhotoButton.bind(this)
		this.showPhoto = this.showPhoto.bind(this)
		this.hidePhotoView = this.hidePhotoView.bind(this)
	}

	// Handle state of popup window here
	state = {
		popupWindow: false,
		posts: [],
		photoView: false,
		photoViewData: ''
	};

	componentWillMount(){
		this.doStuff('All');
	}

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

	doStuff = async (val) => {
		// make call to firebase
		//let tempData = [{key: 'a', group: 'Roommates'}, {key: 'b', group: 'Roommates'}, {key: 'c', group: 'Family'}, {key: 'd', group: 'soccer team 2018'}];
		//let tempData = Fire.downloadPosts();
		await Fire.downloadPosts().then(p => {
			//this.setState({posts: p})
			var revisedData = [];
			if (val == 'All'){
				//console.log(p)
				this.setState({posts: p});
			}
			else{
				revisedData = p.filter(function (item){return item.group == val});
				this.setState({posts: revisedData});
			}
		})	

	}

	// Removes extra whitespace introducedß by navigation
	static navigationOptions = {
    	header: null,
  	};

  //**********************************************
  //When showing a picture, set this.state.photoViewData to the ID of the post to show
  //then call this method

  showPhoto = (photoID) => {
		this.setState(prevState => ({
  			photoView: true,
  			photoViewData: photoID
		}));
	};

	hidePhotoView() {
		this.setState({
			photoView: false
		})
	};



	// Removes extra whitespace introducedß by navigation
	static navigationOptions = {
    	header: null,
  };

  //Remove the picbutton, this is just used to show and hide the photo view right now

	render() {
		const {navigate} = this.props.navigation;
		let myData = [
			{value: 'All',},
			{value: 'Roommates',}, 
			{ value: 'Family', }, 
			{ value: 'soccer team 2018', }];
		return (
			<View style={{flex: 1}}>
				<Navbar navigation={this.props.navigation} />
				<Dropdown label='Filter' data={myData} value="All" onChangeText={value => this.getDropdownVal(value) }/>				
				<PopupWindow status={this.state.popupWindow} />

				{this.state.photoView ? 

				<PhotoView status={this.state.photoView} handler={this.hidePhotoView} postID={this.state.photoViewData}/>
				:
				<View></View>
				}

				<View style={styles.main}>
					<ScrollView>
					<FlatList
  						data={this.state.posts}
  						renderItem={ ({item}) => <Post link={item.src} group={item.group} handleClick={() => this.showPhoto(item.id)} /> }
						
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
	},
})