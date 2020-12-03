import React from 'react';
import { Text,StyleSheet, Platform } from 'react-native';

function AppText({children,style}) {
    return (
    <Text style={styles.Text, style}>{children}</Text>
    );
}




const styles = StyleSheet.create({
    Text:{
        color:"tomato",
        ...Platform.select({
            ios:{
                fontSize:18
                ,
                fontFamily:"Avenir"
            }
        ,
        android:{
           fontSize:18,
           fontFamily:"Roboto"
        
        }
        })
    }
    
})

export default AppText;