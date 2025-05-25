import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function MyPage() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>我的页面正在开发</Text>
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