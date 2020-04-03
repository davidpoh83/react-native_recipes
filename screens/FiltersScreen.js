import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FavoritesScreen = props => { 
    return (
        <View style={styles.screen}>
            <Text>The Filters Screen!</Text>
        </View>
    );
};

const styles = StyleSheet.FiltersScreen({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default CategoriesScreen;