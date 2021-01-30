import React from 'react';
import { FlatList,StyleSheet } from 'react-native';
import Card from '../components/Card';

import color from '../config/colors';
import Screen from '../components/Screen';
import colors from '../config/colors';

const listing=[
    {
        id: 1,
        title: 'FIRST HOUSE',
        price: 4400,
        image :require('../assets/house1.jpg')
    },
    {
        id: 2,
        title: 'SECOND HOUSE',
        price: 3450,
        image :require('../assets/background.jpg')
    }

];

function ListingScreen(props) {
    return (
        <Screen style={styles.screen}>
            <FlatList
                data={listing}
                keyExtractor={listing => listing.id.toString()}
                renderItem={({ item })=>
            <Card title={item.title}
                    subTitle={ "$" + item.price}
                    image={item.image}

                /> }
                />
            
        </Screen>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding:20,
        backgroundColor:colors.lightgrey
    }
})

export default ListingScreen;