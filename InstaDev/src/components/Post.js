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
  TouchableOpacity
} from 'react-native';
import { tsConstructorType } from '@babel/types';

const widthScreen = Dimensions.get('screen').width;
export default class Post extends Component {
  constructor(props){
    super(props);
    this.state={
        picture:this.props.ListPhotographs
    }
  }
  render() {
    const{picture} =  this.state;
    return (
      <View >
        <View style={style.cabecalhoPerfil}>
          <Image
            source={picture.perfil}
            style={style.imgCabecalhoPerfil}
          />
          <Text style={style.nomeCabecalhoPerfil}>{picture.user}</Text>
        </View>
        <Image
          source={picture.urlPost}
          style={style.posts}
        />
        <View style={style.panelIcons}>
          <TouchableOpacity>
             <Image style={style.like} source={require('../../Resources/icons/like.png')} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image style={style.comentario} source={require('../../Resources/icons/comentarios.png')} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image style={style.enviar} source={require('../../Resources/icons/enviar.png')} />
          </TouchableOpacity>
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
      width:30,height:30,borderRadius:50,marginRight:10
    },
    nomeCabecalhoPerfil:{fontSize:20},
    posts:{
      width:widthScreen,height:widthScreen
    },
    panelIcons:{
        flexDirection:'row',
    },
    like:{
      width:60,
      height:50,
    },
    comentario:{
      marginTop:5,
      width:45,
      height:40,
    },
    enviar:{
      marginLeft:20,
      marginTop:15,
      width:23,
      height:23,
    }
  });