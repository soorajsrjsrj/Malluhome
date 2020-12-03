import React from 'react';
import { FlatList } from 'react-native';
import ListItem from '../components/ListItem';




const messages =[{
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
    return (
     <FlatList 
     data={messages}
     keyExtractor={message => message.id.toString()}
     renderItem={({item}) => 
     <ListItem
        title={item.title}
        subTitle={item.description}
        image={item.image} />} />
    );
}

export default MessageScreen;