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
  Dimensions,
  ScrollView,
  FlatList
} from 'react-native';

const widthScreen =Dimensions.get('screen').width;
export default class App extends Component{
  render() {
    const  ListPhotographs = [
      {id:1,user:'luiz Moitinho'},
      {id:2,user:'Fernanda Souza'},
      {id:3,user:'Wedson Texeira'},
    ]   
    return (
      <View>
        <View style={{backgroundColor:'#ccc', marginBottom:10}}>
          <Image style={{width:50,height:30}} 
             source={require('./Resources/icons/icon-camera.png')}/>
          <Text>Instagram</Text>
        </View>
        {<FlatList 
          
          keyExtractor = {(item) => item.id}
          data={ListPhotographs} 
          renderItem = {({item}) =>
          <View style={{margin:10}}>
              <View style={{flexDirection:'row', alignItems:'center'}}>
                <Image source={require('./Resources/Img/perfil.jpg')}
                      style={{width:50,height:50,borderRadius:70,marginRight:20}}/>   
                <Text style={{fontSize:20}}>{item.user}</Text>
              </View>
              <Image source={require('./Resources/Img/perfil.jpg')}
                    style={{width:widthScreen,height:widthScreen}}/>     
          </View>
        } 
      /> }
      </View>
     
    );  
  }
}

