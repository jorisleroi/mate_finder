import 'react-native-gesture-handler';
import React from 'react';
import {View, StyleSheet, Image} from 'react-native';

import HomeScreen from './src/screens/HomeScreen';
import MatchesScreen from './src/screens/MatchesScreen';
import MatchesScreenNotUsed from './src/screens/MatchesScreenNotUsed';
import Header from './src/components/Header';
import Footer from './src/components/Footer';



const App = ()=> {

  const onSwipeLeft = (user) =>{
    console.warn("swipe left", user.name)
  };

  const onSwipeRight = (user) =>{
    console.warn("swipe right", user.name)
  };

  return (
    <View style={styles.pageContainer}>
      <Header style={styles.header}/>
      <MatchesScreen/>
      <Footer style={styles.footer}/>
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
    flex:0.18,
  },
  footer:{
    flex: 0.18,
  },
  
  logo:{
    marginTop: 50,
    flex: 1,
    marginBottom: 10,
  },
});

export default App;