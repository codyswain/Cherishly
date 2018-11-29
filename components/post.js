import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

export default class Post extends React.Component {
	render(){
        var imageURL = this.props.link;   
        /*if (this.state.hidden){
            return null;
        }*/
        return (
            <View >
            <Image 
            style={styles.postImage}
            source={{ uri: imageURL }}
            group={ this.props.group } />
        </View>
    );
	}
}

const styles = StyleSheet.create({
    viewWrapper: {
        flex: 1,
    },
    postImage: {
        width: 350,
        height: 350,
        margin: 5,
    }
})
