import React, { useState } from 'react';
import { TextInput, View  ,StyleSheet, Platform, TouchableWithoutFeedback, Button,Modal, FlatList} from 'react-native';
import{ MaterialCommunityIcons } from '@expo/vector-icons';

import AppText from './AppText';

import defaultStyles from '../config/styles';
import Screen from './Screen';
import PickerItem from './PickerItem';


function AppPicker({icon,items,placeholder,onSelectItem,selectedItem, ...otherProps}) {

   const [modalVisible,setModalVisibile] = useState(false);
    return (
        <React.Fragment>
        <TouchableWithoutFeedback onPress ={()=>setModalVisibile(true)}>
        <View style={styles.container}> 
           {icon &&<MaterialCommunityIcons  name={icon} size={20} color={defaultStyles.colors.medium} style={styles.icon}/>}
    <AppText style={styles.text}>{selectedItem? selectedItem.label:placeholder}</AppText>

    <MaterialCommunityIcons  name="chevron-down" size={20} color={defaultStyles.colors.medium}/>
            
        </View>
        </TouchableWithoutFeedback>
        <Modal visible={modalVisible} animationType="slide">
            <Screen>
            <Button title="Close" onPress={()=>setModalVisibile(false)}/>
            <FlatList data={items}
            keyExtractor={item=> item.value.toString() }
            renderItem={({ item})=>( <PickerItem
                                            label={item.label}
                                   onPress={()=>{
                                       setModalVisibile(false);
                                   onSelectItem(item); }} />) } />
</Screen>
        </Modal>
        </React.Fragment>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:defaultStyles.colors.lightgrey,
        borderRadius:25,
        flexDirection:"row",
        width:'100%',
        padding: 15,
        marginVertical:10
    },
    icon:{
        marginRight:10
    },
    text:{
        flex:1,
    }
    
})

export default AppPicker;