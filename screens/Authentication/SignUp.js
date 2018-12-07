import React from 'react';
import {StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default class SignUp extends React.Component {
	state = {
		email: '',
		password: '',
		errorMessage: null,
	}
	handleSignUp = () => {
		// Insert Firebase stuff here
		console.log('Handling signing up')
	}
	render(){
		return ( 
			<View style={styles.container}>
				<Text>Sign up </Text>
				{this.state.errorMessage &&
					<Text style={{ color: 'red' }}>
						{this.state.errorMessage}
					</Text>
				}
				<TextInput
					placeholder="Email"
					autoCapitalize="none"
					style={style.textInput}
					onChangeText={styles.textInput}
					onChangeText={email=>this.setState({email})}
					value={this.state.email}
				/>
				<TextInput
					secureTextEntry
					placeholder="Password"
					autoCapitalize="none"
					style={styles.textInput}
					onChangeText={password=> this.setState({password})}
					value={this.state.password}
				/>
				<Button title="Sign up" onPress={this.handleSignUp} />
				<Button 
					title="Already have an account? Login"
					onPress={() => this.props.navigation.navigate('Login')}
				/>
			</View>
		)
	}
}

const style=StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center', 
	},
	textInput: {
		height: 40,
		width: '90%',
		borderColor: 'gray',
		borderWidth: 1,
		marginTop: 8,
	}
})