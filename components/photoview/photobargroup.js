import React from 'react';
import { View, StyleSheet, Text, TouchableHighlight, Image} from 'react-native';


export default class PhotoBarGroup extends React.Component {

  render(){
    const userInfo = this.props.data;
    const postInfo = this.props.post;
    const date = new Date(postInfo.date)
    var month = date.getMonth() + 1
    var day = date.getDate()
    var year = date.getFullYear()
    var dateString = '' + month.toString() + '/' + day.toString() + '/' + year.toString()
      return (
      <View style={styles.photoInfoBar}>
        <View style={styles.picViewName}>
          <View style={styles.profPicContainer}> 
            <Image source={{uri:userInfo.pic}} style={styles.profPic}/>
          </View>

          <View style={styles.userName}>
            <Text style={{fontFamily: 'Gill Sans'}}>{userInfo.name}</Text>
          </View>
        </View>
        <View style={styles.picGroups}>
          <View style={styles.groupIcon}>
            <Text style={{fontFamily: 'Gill Sans'}}>{postInfo.group}</Text>
          </View>
        </View>

        <View style={styles.picViewDate}>
          <Text style={{fontFamily: 'Gill Sans'}}>{dateString}</Text>
        </View>
      </View>
    
      );
    
  }
}

const styles = StyleSheet.create({

  photoInfoBar : {
    backgroundColor: 'rgba(240, 240, 240, 0.75)',
    width: '100%',
    height: '20%',
    position: 'absolute',
    top: 0,
    borderTopColor: '#eeeeee',
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
    //borderRightColor: '#eeeeee',
    //borderRightWidth: 0,
    borderBottomLeftRadius: 5,
    justifyContent: 'center',
    alignItems: 'center'
    
  },

  userName: {
    width: '60%',
    height: '100%',
    position: 'absolute',
    right: 5,
    justifyContent: 'center',
    alignItems: 'center',
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

  picGroups : {
    width: '30%',
    height: '100%',
    position: 'absolute',
    left: '40%',
    bottom: 0,
    //borderRightColor: '#eeeeee',
    //borderRightWidth: 1,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },

  groupIcon : {
    backgroundColor: 'rgba(220, 220, 220, 0)',
    width: '90%',
    height: '90%',
    textAlign: 'center',
    // fontSize: 12,
    // paddingTop: 14,
    // paddingBottom: 14,
    // paddingRight: 40,
    // paddingLeft: 40,
    borderRadius: 5,
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  },

  picViewDate : {
    width: '30%',
    height: '100%',
    position: 'absolute',
    right:0,
    bottom: 0,
    borderBottomRightRadius: 5,
    justifyContent: 'center',
    alignItems: 'center'
  }
})