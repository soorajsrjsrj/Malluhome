import React from 'react';
import { Image, View ,StyleSheet, TouchableHighlight } from 'react-native';
import colors from '../config/colors';
import AppText from './AppText';
import color from '../config/colors';

import Swipeable from 'react-native-gesture-handler/Swipeable';

function ListItem({title,subTitle,image,IconComponent ,onPress,renderRightActions}) {
    return (
        <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight
        underlayColor={colors.lightgrey}
        onPress={onPress}>
        <View style={styles.container}>
            {IconComponent}
            {image && <Image style={styles.img} source={image}/>}
            <View style={styles.detailContainer}>
    <AppText style={styles.title}>{title}</AppText>
    {subTitle &&<AppText style={styles.subTitle}>{subTitle}</AppText>}
            </View>
            
        </View>
        </TouchableHighlight>
        </Swipeable>
    );
}
const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        padding:15,
        backgroundColor:colors.white
       
       
        
    },
    detailContainer:{
        marginLeft:10,
        justifyContent:'center'
    },
    img:{
        width: 70,
        height: 70,
        borderRadius: 35,
       
    },
    title:{
        fontWeight:"500"  
      },
      subTitle:{
          color:color.medium
      }
    
    
    
})

export default ListItem;