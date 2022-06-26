import React from 'react';
import {Text, Image, ImageBackground, View, StyleSheet} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import {Divider} from "@rneui/themed";



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
                start={{ x: 0, y: 0 }}
                end={{x: 1, y: 1 }}
                colors={['#023E63', '#023554', '#031723', '#000406']}
                style={styles.bottom}>
                <View style={styles.firstTier}>
                    <Text>ABC</Text>
                </View>
                <Divider inset={true} insetType="middle" width={5} borderRadius={5} color="#FFD56A"/>
                <View style={styles.secondTier}>
                    <Text>DEF</Text>
                </View>
                <Divider inset={true} insetType="middle" width={5} borderRadius={5} color="#FFD56A"/>
                <View style={styles.thirdTier}>
                    <Text>GHI</Text>
                </View>
            </LinearGradient>
        </View>
    );
};

const styles = StyleSheet.create({

    card:{
      width: '100%',
      height: '100%',

      borderRadius: 20,
      backgroundColor: '#fefefe',
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 6,
      },
      shadowOpacity: 0.37,
      shadowRadius: 7.49,
      elevation: 12,
      borderRadius: 20,
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
    firstTier:{
        flex:0.35,
    },
    secondTier:{
        flex:0.35,
    },
    thirdTier:{
        flex:0.3,
    }, 
  });

export default Cardd;