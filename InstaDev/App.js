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
import Post from './src/components/Post'
import { importNamespaceSpecifier } from '@babel/types';

const widthScreen =Dimensions.get('screen').width;
export default class App extends Component{
render() {
  const  ListPhotographs = [
    {
      id:1,
      user:'luiz Moitinho',
      perfil:require("./Resources/Img/luizPerfil.jpg"),
      urlPost:require("./Resources/Img/post1.jpg")

    },
    {
      id:2,
      user:'luiz Moitinho',
      perfil:require("./Resources/Img/luizPerfil.jpg"),
      urlPost:require("./Resources/Img/post2.jpg")
    }
     
  ] 
  return (
    <ScrollView style={style.container}>
      <View style={style.nav}>
        <Image style={style.navIcon} source={require('./Resources/icons/logoBranco.jpg')}/>
        <Text style={style.logo}>Instagram</Text>
      </View>
      {
       ListPhotographs.map((pic)=>
        <Post key={ListPhotographs.id} ListPhotographs={pic} />
      )
      }
      <View style={style.footer}>
        <Text style={style.footerCopy}>
          Todos os direitos reservados MTI &copy;
          </Text>
      </View>
    </ScrollView>

  );  
}
}

const style = StyleSheet.create({
  container:{
    backgroundColor:"#fff"
  },
  nav:{
    height:50,
    flexDirection:'column',
    marginBottom:10,
    flexDirection:'row',
    alignItems:'center',
    borderBottomWidth:1,
    borderEndColor:'#ccc',
  },
  navIcon:{    
    width:50,
    height:35,
    marginRight:10
  },
  logo:{
    fontSize:24,
  },
  footer:{
    borderTopWidth:1,
    borderTopColor:'#ccc',
    marginTop:20,
    width:widthScreen,
    flexDirection:'row',
    alignItems: 'center',
    justifyContent:"center",
    height:80,
  },
  footerCopy:{
    color:'#4C4C4D',
    fontSize:20,
  }
});
