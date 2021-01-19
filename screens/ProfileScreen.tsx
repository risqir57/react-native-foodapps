import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Title } from 'react-native-paper'

import EditScreenInfo from '../components/EditScreenInfo';
import { View } from '../components/Themed';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Title style={styles.title}>Title Tab One</Title>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/ProfileScreen.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
