import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import TopBar from '../src/components/homeComponents/TopBar';

export default function HomePage() {
    const [selectedTab, setSelectedTab] = useState('发现');
    const [posts, setPosts] = useState([]);

    return (
        <View style={styles.container}>
            <TopBar selectedTab={selectedTab} onTabPress={setSelectedTab}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});