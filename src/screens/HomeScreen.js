import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import Cardd from '../components/TinderCard2';
import users from '../../assets/data/users';

import AnimatedStack from '../components/AnimatedStack';


const HomeScreen = ()=> {
  const onSwipeLeft = user =>{
    console.warn("swipe left", user.name);
  };

  const onSwipeRight = user =>{
    console.warn("swipe right", user.name);
  };

  return (
    <View style={styles.pageContainer}>
      <AnimatedStack
        data={users}
        renderItem={({item}) => <Cardd user={item}/>}
        onSwipeRight={onSwipeRight}
        onSwipeLeft={onSwipeLeft}
      />
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

export default HomeScreen;