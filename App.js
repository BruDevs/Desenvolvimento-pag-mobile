import * as React from 'react'; 
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';

export default function App()
{
  return( 
  <View style={estilo.container}> 
  <ScrollView>
  <Text style={estilo.titulo}>Profissões de TI</Text>

  <Text style={estilo.subtitulo}> Programador de Mobile</Text>
  
  <Image style={estilo.img} source={require("./assets/Mobile.jpg")}/>
  
  <Text style={estilo.subtitulo}> Programador de Backend</Text>
  
  <Image style={estilo.img} source={require("./assets/Backend.jpg")}/>
  
  <Text style={estilo.subtitulo}> Programador de Frontend</Text>
  
  <Image style={estilo.img} source={require("./assets/Frontend.jpg")}/>  
  
  <Text style={estilo.subtitulo}> Analista de DevOps </Text>
  
  <Image style={estilo.img} source={require("./assets/Devops.jpg")}/>  </ScrollView>
  
  </View> );

}

const estilo = StyleSheet.create({

container:{

flex:1,
justifyContent: "center",
alignItems: "center",
background:"#00bfff"
},
titulo:
{
  marginTop:30,
  fontSize:50,
  color:"#800000",
  marginBottom:20
},
img:{
  width: 250,
  height: 200,
  marginBottom:20,
  borderRadius:20
},
subtitulo:{
  fontSize:20
}

})