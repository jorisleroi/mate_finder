import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import users from '../../../assets/data/users';

const MatePreview = (props) => {
    const {name, message, image} = props.user;
    return(
        <View style={styles.cardContainer}>
            <Text style={styles.title}>{name}</Text>
            <View style={styles.bottomPart}>
                <View style={styles.leftPart}>
                    <View style={styles.photoArea}>
                        <Image 
                            source={{
                                uri: image,
                            }}
                            style={styles.image} 
                        />
                    </View>
                </View>
                <View style={styles.rightPart}>
                    <Text style={styles.messagePreview}>{message}</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
      backgroundColor: '#ffe',
      padding: 8,
      marginVertical: 8,
      borderColor: 'black',
      borderWidth: 2,
      borderRadius: 10,
      flexDirection: 'column',
      shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

elevation: 4,

elevation: 12,
    },
    bottomPart: {
        flexDirection: 'row',
    },
    title: {
      fontSize: 13,
      color: 'black',
      marginBottom: 5,
      fontWeight: 'bold',
    },
    photoArea:{
        width: 55,
        height: 55,
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 50,
        alignItems: 'center',
        backgroundColor: '#d3d3d3',
    },
    leftPart:{
        flex: 0.2,
        alignItems: 'center',
    },
    rightPart:{
        flex: 0.8,
        alignItems: 'center',
        backgroundColor: '#d3d3d3',
        borderRadius: 10,
        borderWidth: 2,
        marginLeft: 10,
        borderColor: 'black',
    },
    messagePreview:{
        color: 'gray',
        fontStyle: 'italic',
        textAlign: 'center',
        padding: 15,
        flex: 1,
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 50,
    },
  });

  export default MatePreview;

  