import React from 'react';
import { View ,StyleSheet} from 'react-native';
import colors from '../config/colors';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

function ListItemDeleteAction({onPress}) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.Conatiner}>
            {/* <MaterialCommunityIcons 
            name="trash-can"
            size={35}
            colors={colors.white}/> */}
            

<FontAwesome5 name="trash-alt" size={24} color={colors.white}/>
        </View>
        </TouchableWithoutFeedback>
    );
}
const styles = StyleSheet.create({
    Conatiner:{
        backgroundColor:colors.danger,
        width:70,
        height:"100%",
        justifyContent:"center",
        alignItems:"center"
       

    }
    
})
export default ListItemDeleteAction;