import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import users from '../../assets/data/users';
import MatePreview from '../components/MatePreview';


const MatchesScreen = () => {
  const renderItem = ({ item }) => (
    <MatePreview
      user={item}
      name={item.name}
      message={item.message}
      image={item.image}
      style={styles.matePreview}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={users}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    width: '90%',
  },
  matePreview: {
    padding: 10,
    flex:1,
    height: '100%',
    backgroundColor: 'red',
  },
});

export default MatchesScreen;