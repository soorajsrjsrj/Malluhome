import React,{useState} from 'react';
import { FlatList, StyleSheet, View,} from 'react-native';
import ListItem from '../components/ListItem';

import Constants from 'expo-constants';
import Screen from '../components/Screen';
import ListItemSeperator from '../components/ListItemSeperator';
import ListItemDeleteAction from '../components/ListItemDeleteAction';
console.log(Constants);




const initialMessages =[{
    id:1,
    title:'t1',
    description:'d1',
    image: require('../assets/sooraj.jpeg')

},
{
    id:2,
    title:'t2',
    description:'d2',
    image: require('../assets/sooraj.jpeg')
    
}
]

function MessageScreen(props) {
    const[messages,setMessages] = useState(initialMessages);
    const[refreshing,setRefreshing] =useState(false);
   
    


    const handleDelete = message => {
        setMessages(messages.filter(m=>m.id !==message.id));
       

    }
    return (
        <Screen style={styles.screen}>
     <FlatList 
     data={messages}
     keyExtractor={message => message.id.toString()}
     renderItem={({item}) => 
     <ListItem
        title={item.title}
        subTitle={item.description}
        image={item.image}
        onPress={ ()=> console.log("message selected",item)} 
        renderRightActions={()=><ListItemDeleteAction 
            onPress={()=>handleDelete(item)} />} />} 
        ItemSeparatorComponent={ListItemSeperator} 
        refreshing={refreshing}
        onRefresh={()=>{
            setMessages([
                {
                    id:2,
                    title:'t2',
                    description:'d2',
                    image: require('../assets/sooraj.jpeg')
                    
                }

            ]);
        }}
        />

        </Screen>
    );
}

const styles = StyleSheet.create({
   
})

export default MessageScreen;