import { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Text, Platform } from "react-native";

export default function TobBar() {
    const [selectedTab, setSelectedTab] = useState('发现'); // 默认选中"发现"
    const handleTbaBarPress = (tabName: string) => {
        setSelectedTab(tabName);
    }

    return (
        <View style={styles.container}>
            <View style={styles.tabBar}>
                {/* 关注选项 */}
                <TouchableOpacity
                    style={styles.tabItem}
                    onPress={() => { handleTbaBarPress('关注') }}>
                    <Text style={[
                        styles.tabText,
                        selectedTab === '关注' ? styles.selectedTabText : styles.unselectedTabText
                    ]}>
                        关注
                    </Text>
                </TouchableOpacity>

                {/* 发现选项 */}
                <TouchableOpacity
                    style={styles.tabItem}
                    onPress={() => { handleTbaBarPress('发现') }}>
                    <Text style={[
                        styles.tabText,
                        selectedTab === '发现' ? styles.selectedTabText : styles.unselectedTabText
                    ]}>
                        发现
                    </Text>
                </TouchableOpacity>

                {/* 附近选项 */}
                <TouchableOpacity
                    style={styles.tabItem}
                    onPress={() => { handleTbaBarPress('附近') }}>
                    <Text style={[
                        styles.tabText,
                        selectedTab === '附近' ? styles.selectedTabText : styles.unselectedTabText
                    ]}>
                        附近
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        paddingTop: Platform.OS === 'ios' ? 44 : 0, // iOS 状态栏高度
    },
    tabBar: {
        flexDirection: 'row',
        height: 50, // 调整为合适的高度
        backgroundColor: '#fff',
        borderBottomColor: '#f0f0f0',
        alignItems: 'center',
        justifyContent: 'space-between', // 改为 space-between
        paddingHorizontal: 16, // 添加一些水平内边距，让文字不完全贴边
    },
    tabItem: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        // height: '100%', // 移除，可能会影响布局
    },
    tabText: {
        fontSize: 17, // 稍微调大字体大小
        fontWeight: '500',
    },
    selectedTabText: {
        color: '#FF2442',
        fontWeight: 'bold',
    },
    unselectedTabText: {
        color: '#333',
    },
});