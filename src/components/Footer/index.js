import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import swipe_icon from '../../../assets/images/swipe_icon.png';
import message_icon from '../../../assets/images/message_icon.png';

const Footer = (props) => {
    return (      
        <View style={styles.footer}>
        <View style={styles.leftPart}>
          <Image 
            source={swipe_icon} 
            style={styles.messageIcon}
            resizeMode="contain" 
          />
        </View>
        <View style={styles.centerPart}>
          <Image 
            source={swipe_icon} 
            style={styles.swipeIcon}
            resizeMode="contain" 
          />
        </View>
        <View style={styles.rightPart}>
          <Image 
            source={message_icon} 
            style={styles.messageIcon}
            resizeMode="contain" 
          />
        </View>
      </View>
    );
};

const styles = StyleSheet.create({
    footer:{
        backgroundColor: '#bbe8c4',
        width: '100%',
        flex: 0.15,
        //alignItems:'center',
        //justifyContent:'center',
        borderTopWidth: 2,
        borderColor: 'black',
        flexDirection: 'row',
    },
    swipeIcon:{
        flex: 1,
      },
      messageIcon:{
        flex:1,
      },
      leftPart:{
        flex: 0.33,
      },
      rightPart:{
        flex: 0.33,
      },
      centerPart:{
        flex: 0.34,
        backgroundColor: 'orange',
      },

});

export default Footer;