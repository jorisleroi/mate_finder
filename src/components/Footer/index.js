import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import swipe_icon from '../../../assets/images/swipe_icon.png';
import message_icon from '../../../assets/images/message_icon.png';
import profile_icon from '../../../assets/images/profile_icon.png';
import {LinearGradient} from 'expo-linear-gradient';



const Footer = () => {
    return (
      <LinearGradient
        start={{ x: 1, y: 0 }}
        end={{x: 1, y: 1 }}
        colors={['#023554', '#011C2D', '#000000']}
        style={styles.footer}>
        <View style={styles.leftPart}>
          <Image 
            source={profile_icon} 
            resizeMode="contain"
            style={styles.profileIcon}
          />
        </View>
        <View style={styles.centerPart}>
          <Image 
            source={swipe_icon} 
            resizeMode="contain"
            style={styles.swipeIcon}
          />
        </View>
        <View style={styles.rightPart}>
          <Image 
            source={message_icon} 
            resizeMode="contain"
            style={styles.messageIcon}
          />
        </View>
      </LinearGradient>
    );
};

const styles = StyleSheet.create({
  footer:{
    backgroundColor: '#023E63',
    width: '100%',
    flex: 0.15,
    alignItems:'center',
    justifyContent:'center',
    borderTopWidth: 1,
    borderColor: 'black',
    flexDirection: 'row',
  },
  swipeIcon:{
    width: '100%',
    height: '100%',
  },
  messageIcon:{
    width: '100%',
    height: '100%',
  },
  profileIcon:{
    width: '100%',
    height: '100%',
  },
  leftPart:{
    flex: 0.33,
    borderColor: 'black',
    borderWidth: 1,
    padding: 20,
  },
  rightPart:{
    flex: 0.33,
    borderColor: 'black',
    borderWidth: 1,
    padding: 20,
  },
  centerPart:{
    flex: 0.34,
    //backgroundColor: 'orange',
    borderColor: 'black',
    borderWidth: 1,
    padding: 20,
  },
});

export default Footer;