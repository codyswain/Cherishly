import React, {Component} from 'react';
import { ScrollView, Image, StyleSheet, View, Button, Text, TouchableHighlight } from 'react-native';
import { Icon } from 'react-native-elements';

import Fire from '../components/firebase/Firebase';

export default class ProfileScreen extends Component {
	static navigationOptions = {
	    header: null,
	  };

	state = {
   		user: {},
    	doneLoading: false
  	};


	getUser = async () => {
  		await Fire.downloadData('users', 'sgHSmNf7g6okDGATasV0').then(u => {
  			console.log("got user")
  			this.setState({user: u, doneLoading:true});
  		});
 	};

 	componentWillMount() {
  		this.getUser();
  	};

	render() {
		const {navigate} = this.props.navigation;
		const userStuff = this.state.user;
		//var user = downloadData(users, xkx4i9QdWB7Tfr5Tk2ut);
		if (this.state.doneLoading) {
			console.log("render")
		return (
			<View style={{flex: 1}}>
				<View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#F35F64'}}>
					<Button style={{align: 'left', fontFamily: 'Gill Sans', justifyContent: 'center'}}
			          title="Home"
			          color="white"
			          onPress={() => this.props.navigation.goBack()}
			          fontFamily="Gill Sans"
			        /> 
			        <Icon name='person' size={40} color='white' style={{alignItems: 'center'}}/>
			        <Button style={{align: 'left'}}
			          title="Home"
			          color="#F35F64"
			          fontFamily="Gill Sans"
			        /> 
				</View>

				<View style={{
					flex: 9, 
					backgroundColor: 'white',
					alignItems: 'center',
					//align: 'flex-start',
					//flexDirection: 'column'
       				//justifyContent: 'space-evenly'
					}}>
					<ScrollView>
					<View style={{
						flex: 2,
       					justifyContent: 'space-around',
       					margin: 35
					}}>
						<Image style={styles.profpic} source={{uri:userStuff.pic}}/> 
						<View style={{margin: 10}}/>
						<Text style={styles.titletext}>{userStuff.name}</Text>
						<View style={{margin: 30}}/>

						<Text style={{alignItems: 'center', color: 'black', fontFamily: 'Gill Sans', textAlign: 'center', fontSize: 20}}>Groups</Text>
						<TouchableHighlight onPress={() => navigate('Home')}>
							<View style={styles.addButton}>
								<Text style={styles.groupText}>		
									Roommates
								</Text>
							</View>
						</TouchableHighlight>
						<TouchableHighlight onPress={() => navigate('Home')}>
							<View style={styles.addButton}>
								<Text style={styles.groupText}>		
									Family
								</Text>
							</View>
						</TouchableHighlight>
						<TouchableHighlight onPress={() => navigate('Home')}>
							<View style={styles.addButton}>
								<Text style={styles.groupText}>		
									Soccer
								</Text>
							</View>
						</TouchableHighlight>
						</View>
					</ScrollView>
				</View>
			</View>
		);
		}
		else {
			return null;
		}
}
}

const styles = StyleSheet.create({
	profpic:{
		flex: 3,
  		alignItems: 'center',
  		width: 200,
    	height: 200,
    	borderRadius: 100, 
	},
	titletext:{
		flex: 3,
		alignItems: 'center',
		textAlign: 'center',
		color: 'black',
  		fontFamily: 'Gill Sans',
  		fontSize: 30
	},
  	addButton: {
  		flex: 1,
  		height: 35,
  		justifyContent: 'center',
  		alignItems: 'center',
  		borderRadius: 50, 
  		backgroundColor: '#F35F64',
  		margin: 2
  	},
  	groupText:{
  		fontSize: 15,
  		color: 'white',
  		fontFamily: 'Gill Sans'
  	}
})