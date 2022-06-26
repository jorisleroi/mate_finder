import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import logo from '../../../assets/images/logo.png';
import {LinearGradient} from 'expo-linear-gradient';


const Header = (props) => {
    return (      
        <LinearGradient 
            style={styles.header}
            start={{ x: 1, y: 0 }}
            end={{x: 1, y: 1 }}
             colors={['#023554', '#011C2D', '#000000']}>
            <Image 
            source={logo} 
            style={styles.logo}
            resizeMode="contain" 
            />
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    header:{
        backgroundColor: '#023E63',
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