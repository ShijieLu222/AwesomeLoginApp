import React from 'react';
import { View, StyleSheet } from 'react-native';
import TopBar from '../src/components/homeComponents/TopBar';

export default function HomePage() {
    return (
        <View style={styles.container}>
            <TopBar />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});