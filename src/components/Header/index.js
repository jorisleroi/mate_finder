import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import logo from '../../../assets/images/logo.png';

const Header = (props) => {
    return (      
        <View style={styles.header}>
            <Image 
            source={logo} 
            style={styles.logo}
            resizeMode="contain" 
            />
        </View>
    );
};

const styles = StyleSheet.create({
    header:{
        backgroundColor: '#bbe8c4',
        width: '100%',
        flex:0.18,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        borderBottomWidth: 2,
        borderColor: 'black',
    },
    logo:{
        marginTop: 35,
    }

});

export default Header;