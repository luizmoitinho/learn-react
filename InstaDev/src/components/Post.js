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
  loadIconeLike(liked){
   return liked?
     require('../../Resources/icons/liked.png'):require('../../Resources/icons/like.png')
  }
  likePicture(){
    const pictureRefresh ={
      ...this.state.picture,
      liked: !this.state.picture.liked
    }
    this.setState({picture:pictureRefresh})
  }
  showLikes(likes){
    if(likes>0)
      return (
          <Text  style={style.textPic}>
            {likes} {likes>1?'Curtidas':'Curtida'} 
          </Text>
      );
    else 
      return;

  }

  render() {
    const{picture} =  this.state;
    return (
      <View> 
        <View  style={style.cabecalhoPerfil}>
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
        <View style={style.row}>
          <View style={style.column}>
            <TouchableOpacity onPress={this.likePicture.bind(this)}>
              <Image style={ picture.liked? style.liked:style.like } 
              source={this.loadIconeLike(picture.liked)} />
            </TouchableOpacity>
            {this.showLikes(picture.likes)}
          </View>
          <TouchableOpacity>
            <Image style={style.comentario} source={require('../../Resources/icons/comentarios.png')} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image style={style.enviar} source={require('../../Resources/icons/enviar.png')} />
          </TouchableOpacity>
        </View>
        <View style={style.row}>
          <Text style={style.textPic}>{picture.user}  <Text style={style.legend}>{picture.coment}</Text></Text> 
         
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
    row:{
        flexDirection:'row',
    },
    column:{
      flexDirection:'column',
    },
    like:{
      width:60,
      height:50,
      
    },
    liked:{
      marginBottom:3,
      marginRight:9,
      marginTop:2,
      marginLeft:6,
      width:46,
      height:45,
    },
    textPic:{
      fontSize:16,
      marginLeft:8,
      fontWeight:'bold'
    },
    legend:{
      fontWeight:'normal',
      fontSize:16,
    },
    comentario:{
      marginLeft:-15,
      marginTop:5,
      width:45,
      height:40,
    },
    enviar:{
      marginLeft:17,
      marginTop:15,
      width:23,
      height:23,
    },



  });