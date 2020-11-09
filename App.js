
import React from 'react';
import { View,Text } from 'react-native';


export default function App() {



  return ( <View style={{
    backgroundColor : "#fff",
    flex: 1,
    justifyContent:"center",
    alignItems:"center"
    
    
  }}>
    <View style={{
      backgroundColor:"dodgerblue",
     width: 100,
     height:100
    }} />
      <View style={{
      backgroundColor:"gold",
      width: 100,
      height:100
    }} />
      <View style={{
      backgroundColor:"tomato",
      width: 100,
     height:100
    }} />
   

    </View>
   

 
   

  );
}
