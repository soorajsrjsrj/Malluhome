import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import AppText from '../components/AppText';
import ListItem from '../components/ListItem';

import colors from '../config/colors';

function ListingDetailsScreen(props) {
    return (
       <View>
           <Image  style={styles.image}source={require("../assets/house1.jpg")}/>
           <View style={styles.detailContainer}>
           <AppText style={styles.title}>New house for sale</AppText>
           <AppText style={styles.price}>$100</AppText>
           <View style={styles.userContainer}>
           <ListItem
                image={require('../assets/sooraj.jpeg')}  
                title="Sooraj Suneesh"
                subTitle="5 listing" 
                />
           </View>
          
           </View>
       </View>
    );
}
const styles = StyleSheet.create({
    image:{
        width:"100%",
        height:300,

    },
    detailContainer:{
        padding:20
    },
    title:{
        fontSize:24,
        fontWeight:'500'
    },
    price:{
        color:colors.secondary,
        fontWeight:"bold",
        fontSize:20
    },
    userContainer:{
      marginVertical:40  
    }
    
})

export default ListingDetailsScreen;