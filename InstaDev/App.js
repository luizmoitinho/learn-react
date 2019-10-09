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
} from 'react-native';
import Post from './src/components/Post'
import { importNamespaceSpecifier } from '@babel/types';

const widthScreen =Dimensions.get('screen').width;
export default class App extends Component{
render() {
  const  ListPhotographs = [
    {
      id:1,
      user:'LuizMoitinho',
      perfil:require("./Resources/Img/luizPerfil.jpg"),
      urlPost:require("./Resources/Img/post1.jpg"),
      coment:'Sem legenda',
      likes:2,
    },
    {
      id:2,
      user:'LuizMoitinho',
      perfil:require("./Resources/Img/luizPerfil.jpg"),
      urlPost:require("./Resources/Img/post2.jpg"),
      coment:'#tbt',
      likes:0,
    },
    {
      id:3,
      user:'fehSouza',
      perfil:require("./Resources/Img/fernandaPerfil.jpg"),
      urlPost:require("./Resources/Img/fernandaPerfil.jpg"),
      coment:'Só porque certo alguém disse que tô parecendo uma Holandesa nessa foto',
      likes:120,
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
        <Post key={pic.id} ListPhotographs={pic}/>
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
    borderTopWidth:2,
    borderTopColor:'#ccc',
    marginTop:100,
    width:widthScreen,
    flexDirection:'row',
    alignItems: 'center',
    justifyContent:"center",
    height:80,
  },
  footerCopy:{
    color:'#4C4C4D',
    fontSize:18,
  }
});
