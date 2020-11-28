import React from 'react';
import { Image, ImageBackground,StyleSheet, Text, View } from 'react-native';
import AppButton from '../components/Button';
import colors from '../config/colors';
import { AntDesign } from '@expo/vector-icons';


export default function WelcomeScreen(props) {
    return (
       <ImageBackground style ={styles.background}
           source={require("../assets/background.jpg")}>

               <View style={styles.logoContainer}>
               <AntDesign name="home" size={100} color="white" style={styles.logo}/>

               {/* <Image style={styles.logo} source={require("../assets/icon.png")} /> */}
               <Text style={styles.tagline}>Home for all</Text>
               </View>
               <View style={styles.buttonsContainer}>
              <AppButton title="Login"></AppButton>
              <AppButton title="Register" color="secondary"></AppButton>
              
               </View>

       </ImageBackground>
       
    );
}
const styles = StyleSheet.create({
    background:{
        flex: 1,
        justifyContent:"flex-end",
        alignItems:"center",
    },tagline:{
        fontSize:25,
        fontWeight:"600",
        paddingVertical:20,
        color:colors.white

    },

  
    logo:{
        width:100,
        height:100,
    
      
    },buttonsContainer:{
        padding:20,
        width:"100%"

    }

    ,logoContainer:{
        position:"absolute",
        top:100,
        alignItems:"center"
    }
    
})

