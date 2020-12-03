import React from 'react';
import { Image, View ,StyleSheet } from 'react-native';
import colors from '../config/colors';
import AppText from './AppText';
import color from '../config/colors';

function ListItem({title,subTitle,image}) {
    return (
        <View style={styles.container}>
            <Image style={styles.img} source={image}/>
            <View>
    <AppText style={styles.title}>{title}</AppText>
    <AppText style={styles.subTitle}>{subTitle}</AppText>
            </View>
            
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
       
       
        
    },
    img:{
        width: 70,
        height: 70,
        borderRadius: 35,
        marginRight: 10
    },
    title:{
        fontWeight:"500"  
      },
      subTitle:{
          color:color.medium
      }
    
    
    
})

export default ListItem;