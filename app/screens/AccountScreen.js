import React from 'react';
import ListItem from '../components/ListItem';
import Screen from '../components/Screen';
import { FlatList, StyleSheet, View } from 'react-native';

import colors from '../config/colors';
import Icon from '../components/Icon';
import ListItemSeperator from '../components/ListItemSeperator';

const menuItems=[
    {
        title:"My listing",
        icon:{
            name:"format-list-bulleted",
            backgroundColor:colors.primary
                }
    },
    {
        title:"My Messages",
        icon:{
            name:"email",
            backgroundColor:colors.secondary
                }
    }
]

function AccountScreen(props) {
    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>
            <ListItem
            title="sooraj suneesh"
            subTitle="soorajsuneesh@gmail.com"
            image={require('../assets/sooraj.jpeg')}

            
            />
            </View>
            <View style={styles.container}>

                <FlatList data={menuItems}
                keyExtractor={menuItem => menuItems.title}
                ItemSeparatorComponent={ListItemSeperator}
                renderItem={({ item }) =>
                
                <ListItem
                title={item.title}
                IconComponent={
                <Icon
                name={item.icon.name}
                backgroundColor={item.icon.backgroundColor}
                 />}/>}/>
                  </View>
                  <ListItem 
                  title="Log out" 
                  IconComponent={<Icon 
                            name="logout"
                            backgroundColor="#ffe66d" />
                            }/>
            
       </Screen>
    );
}
const styles = StyleSheet.create({
    screen:{
        backgroundColor:colors.lightgrey

    },
    container:{
        marginVertical:20
    },

    
})
export default AccountScreen;