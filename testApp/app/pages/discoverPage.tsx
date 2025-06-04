import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function DiscoverPage() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>热门页面正在开发</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});