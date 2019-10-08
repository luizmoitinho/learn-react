/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,  
} from 'react-native';

const widthScreen = Dimensions.get('screen').width;
export default class Post extends Component {
  render() {
    return (
      <View >
        <View style={style.cabecalhoPerfil}>
          <Image
            source={this.props.ListPhotographs.perfil}
            style={style.imgCabecalhoPerfil}
          />
          <Text style={style.nomeCabecalhoPerfil}>{this.props.ListPhotographs.user}</Text>
        </View>
        <Image
          source={this.props.ListPhotographs.urlPost}
          style={style.posts}
        />
        <View style={style.panelIcons}>
          <Image style={style.like} source={require('../../Resources/icons/like.png')} />
          <Image style={style.comentario} source={require('../../Resources/icons/comentarios.png')} />
          <Image style={style.enviar} source={require('../../Resources/icons/enviar.png')} />

        </View>
      </View>
     
    );
  }
}
const style = StyleSheet.create({
    cabecalhoPerfil:{
      margin:15,marginTop:30,flexDirection:'row', alignItems:'center'
    },
    imgCabecalhoPerfil:{
      width:40,height:40,borderRadius:50,marginRight:10
    },
    nomeCabecalhoPerfil:{fontSize:20},
    posts:{
      width:widthScreen,height:widthScreen
    },
    panelIcons:{
        flexDirection:'row',
        
    },
    like:{
      width:80,
      height:50,
    },
    comentario:{
      marginTop:5,
      width:70,
      height:40,
    },
    enviar:{
      marginLeft:20,
      marginTop:8,
      width:40,
      height:40,
    }
  });