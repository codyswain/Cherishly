import React from 'react';
import { View, StyleSheet, Text, TouchableHighlight, Image} from 'react-native';


export default class PhotoBar extends React.Component {

  render(){
    const photobar = this.props.status;
    if (photobar){
      return (
      <View style={styles.photoInfoBar}>
        <View style={styles.picViewName}>
          <View style={styles.profPicContainer}> 
            <Image source={{uri:"https://firebasestorage.googleapis.com/v0/b/cherishly-412dd.appspot.com/o/woman_profile.jpeg?alt=media&token=0fe3639a-d0ad-488d-8c4b-8441e4c9e6ca"}} style={styles.profPic}/>
          </View>

          <View style={styles.userName}>
            <Text>Alex Longerbeam</Text>
          </View>
        </View>
        <View style={styles.picViewComments}>
          <TouchableHighlight onPress={this.props.handler}>
            <Text>View Comments</Text>
          </TouchableHighlight>
          
        </View>

        <View style={styles.picViewDate}>
          <Text>Yesterday</Text>
        </View>
      </View>
    
      );
    }
    return null;
  }
}

const styles = StyleSheet.create({

  photoInfoBar : {
    backgroundColor: '#96beff',
    width: '100%',
    height: '15%',
    position: 'absolute',
    bottom: 0,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopColor: 'black',
    borderTopWidth: 1,
    textAlign: 'center',
    fontSize: 32,
      //fontFamily: "Oxygen", "Karla", "Lato", "Raleway"
  },

  picViewName : {
    width: '40%',
    height: '100%',
    position: 'absolute',
    left: 0,
    //bottom: '50%',
    borderRightColor: 'black',
    borderRightWidth: 1,
    borderBottomLeftRadius: 20,
    justifyContent: 'center',
    alignItems: 'center'
    
  },

  userName: {
    width: '60%',
    height: '100%',
    position: 'absolute',
    right: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },

  profPicContainer : {
    width: 40,
    height: 40,
    paddingLeft:0,
    position:'absolute',
    left: 5,
    
  },

  profPic : {
    width:'100%',
      height:'100%',
      //objectFit: 'cover',
      overflow: 'hidden',
      resizeMode: 'cover',
    borderRadius:20
  },

  picViewComments : {
    width: '30%',
    height: '100%',
    position: 'absolute',
    left: '40%',
    bottom: 0,
    borderRightColor: 'black',
    borderRightWidth: 1,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },

  picViewDate : {
    width: '30%',
    height: '100%',
    position: 'absolute',
    right:0,
    bottom: 0,
    borderBottomRightRadius: 20,
    justifyContent: 'center',
    alignItems: 'center'
  }
})