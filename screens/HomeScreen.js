import React, {Component} from 'react';
import { Alert, ScrollView, StyleSheet, View, Button, Text, TouchableHighlight, FlatList, Image, LayoutAnimation } from 'react-native';
import Fire from '../components/firebase/Firebase';
import Navbar from '../components/navbar';
import AddButton from '../components/addbutton';
import Post from '../components/post';
import {Dropdown} from 'react-native-material-dropdown';
import PhotoView from '../components/photoview/photoview';
import PhotoUpload from '../components/photoupload/photoupload';

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
		posts: [],
		photoView: false,
		photoViewData: '',
		photoUpload: false,
	};

	componentWillMount(){
		this.doStuff('All');
	}

	// Event handler for add photo button
	// Pass this handler to child component
	handleAddPhotoButton = () => {
		this.setState(prevState => ({
  			photoUpload: !prevState.photoUpload
		}));
		this.doStuff('All');
	}

	getDropdownVal(selectedVal){	
		this.doStuff(selectedVal);
	}

	doStuff = async (val) => {
		// make call to firebase
		await Fire.downloadPosts().then(p => {
			var revisedData = [];
			if (val == 'All'){
				this.setState({posts: p});
			}
			else if (val == 'Me'){
				revisedData = p.filter(function (item){ return item.user == 'sgHSmNf7g6okDGATasV0' });
				this.setState({posts: revisedData});
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
			{ value: 'All',},
			{ value: 'Roommates',}, 
			{ value: 'Family', }, 
			{ value: 'CS188', },
			{ value: 'Soccer', },
			{ value: 'Me', }];
		LayoutAnimation.easeInEaseOut();
		return (
			<View style={{ flex: 1 }}>
				<Navbar navigation={this.props.navigation} />
				<View style={{width: 160, height: 60, alignSelf: 'center', }} >
					<Dropdown label='View:' 
							  data={myData} 
							  value="All" 
							  onChangeText={value => this.getDropdownVal(value) } 
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
				<PhotoUpload status={this.state.photoUpload} handler={this.handleAddPhotoButton}/>

				{this.state.photoView ? 

				<PhotoView status={this.state.photoView} handler={this.hidePhotoView} postID={this.state.photoViewData} />
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

	containerStyle: {
		flex: 1,
		width: 10,
		fontFamily: "Gill Sans",
	},

	dropdown: {
		fontFamily: "Gill Sans",
	}
})