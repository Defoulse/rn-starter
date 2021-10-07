import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
    const userName = "Aidar";

    return ( 
        <View>
            <Text style={styles.textHeader}>Getting started with React Native!</Text>
            <Text style={styles.textSubHeader}>My name is {userName}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    textHeader: {
        fontSize: 45
    },
    textSubHeader: {
        fontSize: 20
    }
});

export default ComponentsScreen;