import 'react-native-gesture-handler';
import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import MatePreview from './src/components/MatePreview';

import HomeScreen from './src/screens/HomeScreen';
import MatchesScreen from './src/screens/MatchesScreen';
import MatchesScreenNotUsed from './src/screens/MatchesScreenNotUsed';
import logo from './assets/images/logo.png';


const App = ()=> {

  const onSwipeLeft = (user) =>{
    console.warn("swipe left", user.name)
  };

  const onSwipeRight = (user) =>{
    console.warn("swipe right", user.name)
  };

  return (
    <View style={styles.pageContainer}>
      <View style={styles.header}>
        <Image 
          source={logo} 
          style={styles.logo}
          resizeMode="contain" 
          />
      </View>
      <MatchesScreen/>
      <View style={styles.footer}/>
    </View>
  );
};

const styles = StyleSheet.create({
  pageContainer:{
    justifyContent: 'center',
    alignItems: 'center', 
    flex: 1,
    width: '100%',
  },
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
  footer:{
    backgroundColor: '#bbe8c4',
    width: '100%',
    flex:0.15,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    borderTopWidth: 2,
    borderColor: 'black',
  },
  logo:{
    marginTop: 50,
    flex:1,
    marginBottom:10,
  },
});

export default App;