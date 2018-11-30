import React from 'react';
import { View, StyleSheet, Image, TouchableHighlight, LayoutAnimation } from 'react-native';

export default class Post extends React.Component {
	render(){
        var imageURL = this.props.link;   
        let handler = this.props.handleClick;
        //LayoutAnimation.easeInEaseOut();
        return (
            <TouchableHighlight activeOpacity={0.7} underlayColor="#ffffff" onPress={handler}>
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
