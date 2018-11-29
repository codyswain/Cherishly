import React from 'react';
import { View, StyleSheet, Image, TouchableHighlight } from 'react-native';

export default class Post extends React.Component {
	render(){
        var imageURL = this.props.link;   
        let handler = this.props.handleClick;
        return (
            <TouchableHighlight onPress={handler}>
            <Image 
            style={styles.postImage}
            source={{ uri: imageURL }}
            group={ this.props.group } />
        </TouchableHighlight>
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
