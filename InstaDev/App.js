/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

const instructions = Platform.select({
  ios: 'Plataforma para controlar dados\n'+
       'coletados em pesquisas e levantamentos de sensos.',
  android: 'Plataforma para controlar dados\n'+
           'coletados em pesquisas e levantamentos de sensos.',
}); 

export default class App extends Component{
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
            MTI Sensus
        </Text>
        <Text style={styles.instructions}>
            Aplicativo para controle de sensos
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 40,
    textAlign: 'center',
    margin: 10,
    color:'#827',
  },
  instructions: {
    fontSize:16,
    fontWeight:'800',
    textAlign: 'center',
    color: '#333',
    marginBottom: 5,
  },
});