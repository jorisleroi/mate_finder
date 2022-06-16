import 'react-native-gesture-handler';
import React from 'react';
import {View, StyleSheet} from 'react-native';
import MatePreview from './src/components/MatePreview';

import HomeScreen from './src/screens/HomeScreen';
import MatchesScreen from './src/screens/MatchesScreen';
import MatchesScreenNotUsed from './src/screens/MatchesScreenNotUsed';

const App = ()=> {

  const onSwipeLeft = (user) =>{
    console.warn("swipe left", user.name)
  };

  const onSwipeRight = (user) =>{
    console.warn("swipe right", user.name)
  };

  return (
    <View style={styles.pageContainer}>
      <MatchesScreen/>
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
});

export default App;