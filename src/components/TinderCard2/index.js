import React from 'react';
import {Text, Image, ImageBackground, View, StyleSheet} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';


const Cardd = (props) => {
    const {name, image, bio} = props.user;
    return (      
        <View style={styles.card}>
            <ImageBackground 
                source={{
                 uri: image,
                 }} 
                 style={styles.image}>
                <View style={styles.cardInner}>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.bio}>{bio}</Text>
                </View>
            </ImageBackground>
            <LinearGradient
                // Background Linear Gradient
                start={{ x: 0, y: 0 }}
                end={{x: 1, y: 1 }}
                colors={['#5851DB', '#C13584', '#E1306C', '#FD1D1D', '#F77737']}
                style={styles.bottom}
            />
        </View>
    );
};

const styles = StyleSheet.create({

    card:{
      width: '100%',
      height: '100%',

      borderRadius: 10,
      backgroundColor: '#fefefe',
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 6,
      },
      shadowOpacity: 0.37,
      shadowRadius: 7.49,
      elevation: 12,
      borderRadius: 10,
      overflow: 'hidden',
      flexDirection: 'column',
    },
    image:{
      width: '100%',
      height: '100%',
      
      flex: 0.3,
      justifyContent: 'flex-end',
    },
    bottom:{
        backgroundColor: '#023554',
        flex: 0.7,
    },
    cardInner:{
        padding:10,
    },
    name:{
      fontSize:30,
      color:'white',
      fontWeight: 'bold',
    },
    bio:{
      fontSize:18,
      color:'white',
      lineHeight:25,
    },
    
  });

export default Cardd;