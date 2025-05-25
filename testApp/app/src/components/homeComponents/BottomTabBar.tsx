import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Platform } from 'react-native';
import { Icon } from '@ant-design/react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../../App';

type NavigationProp = StackNavigationProp<RootStackParamList>;

type IconName = "home" | "like" | "plus" | "message" | "user";

const TABS: { key: string; label: string }[] = [
    { key: "homePage", label: "首页", },
    { key: "discoverPage", label: "热门", },
    { key: "publishPage", label: "发布", },
    { key: "messagePage", label: "消息", },
    { key: "myPage", label: "我的", }
];

export default function BottomTabBar() {
    const navigation = useNavigation<NavigationProp>();
    const [selectedTab, setSelectedTab] = useState('homePage');

    const onChangeTab = (tabName: string) => {
        setSelectedTab(tabName);
        navigation.navigate(tabName as keyof RootStackParamList);
    };

    return (
        <View style={styles.container}>
            <View style={styles.tabBar}>
                {TABS.map((tab) => {
                    // 中间“发布”按钮单独样式
                    if (tab.key === 'publishPage') {
                        return (
                            <TouchableOpacity
                                key={tab.key}
                                activeOpacity={0.85}
                                style={styles.publishItem}
                                onPress={() => onChangeTab(tab.key)}
                            >
                                <View style={styles.publishButton}> </View>

                                {/* <Text style={[styles.tabText, { color: selectedTab === tab.key ? '#FF2442' : '#949494', marginTop: 2 }]}>
                                    {tab.label}
                                </Text> */}
                            </TouchableOpacity>
                        );
                    }

                    return (
                        <TouchableOpacity
                            key={tab.key}
                            style={styles.tabItem}
                            activeOpacity={0.7}
                            onPress={() => onChangeTab(tab.key)}
                        >
                            <Text
                                style={[
                                    styles.tabText,
                                    selectedTab === tab.key
                                        ? styles.selectedTabText
                                        : styles.unselectedTabText
                                ]}
                            >
                                {tab.label}
                            </Text>
                        </TouchableOpacity>
                    );
                })}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
    },
    tabBar: {
        flexDirection: 'row',
        height: 740,
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderColor: '#f0f0f0',
        alignItems: 'flex-end',
        justifyContent: 'space-around',
        paddingBottom: Platform.OS === 'ios' ? 15 : 5, // 适配 iPhone 底部
    },
    tabItem: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    tabText: {
        fontSize: 20,
    },
    selectedTabText: {
        color: '#FF2442',
        fontWeight: 'bold',
    },
    unselectedTabText: {
        color: '#949494',
    },
    publishItem: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        top: 10, // 凸出底部
    },
    publishButton: {
        width: 52,
        height: 52,
        borderRadius: 26,
        backgroundColor: '#FF2442',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#FF2442',
        shadowOpacity: 0.28,
        shadowRadius: 6,
        shadowOffset: { width: 0, height: 2 },
        elevation: 8,
    },
});

