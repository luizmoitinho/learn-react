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
  View,
  Image,
  Dimensions
} from 'react-native';

;
const widthScreen =Dimensions.get('screen').width;
const HeightScreen =Dimensions.get('screen').height;

export default class App extends Component{
  render() {
    return (
      <View>
        <View>
          <Image source={require('./Resources/icons/icon-camera.png')}
          style={{width:40,height:40}}></Image>
          <Text>Instagram</Text>
        </View>

        <Image source={require('./Resources/Img/perfil.jpg')} 
        style={{width:100,height:100,borderRadius:50}}/>
        <Text>Luiz Moitinho</Text>
      </View>
    );  
  }
}

