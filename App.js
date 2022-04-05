import * as React from 'react';
import{View,Text,StyleSheet,Image,ScrollView} from 'react-native';

export default function App(){
  return(
    <View style={estilo.container}>
      <Text style={estilo.titulo}> Praias Lindas do Brasil </Text>
      <Text style={estilo.frase}> Minhas Férias... </Text>
      <ScrollView style={estilo.fotos}>
      <Image style={estilo.img} source={require("./assets/dawn-g8d6c1a72c_1280.jpg")}/>
      <Text style={estilo.legenda}> Guarujá </Text>
       <Image style={estilo.img} source={require("./assets/ocean-ge96bb577d_1920.jpg")}/>
       <Text style={estilo.legenda}> Ipanema </Text>
        <Image style={estilo.img} source={require("./assets/rio-g249dfc286_1920.jpg")}/>
        <Text style={estilo.legenda}> Copacabana </Text>
        <Image style={estilo.img} source={require("./assets/sugar-loaf-pao-de-acucar-g6c9c4ee54_1280.jpg")}/>
        <Text style={estilo.legenda}> Camaco </Text>
        </ScrollView>
    </View>
  );  
}

const estilo = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    backgroundColor: '#99ffff'
  },
  titulo:{
    textAlign:'center',
    fontSize:25,
    marginTop:45,
    marginBottom:15,
    fontWeight:'bold',
    fontFamily:'Tahoma'
  },
  frase:{
    fontSize:15,
    marginBottom:20,
    textAlign:'center',
    fontFamily:'Bahnschrift SemiBold'
  },
  img:{
    width: 400,
    height: 250,
    borderRadius: 20,
  },
  legenda:{
    textAlign:'center',
    fontFamily:'Bahnschrift SemiBold'
  },
  fotos:{
    alignItems: 'center',
  },
});