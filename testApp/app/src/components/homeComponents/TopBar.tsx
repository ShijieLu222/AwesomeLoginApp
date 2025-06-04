// app/src/components/homeComponents/TopBar.tsx
import { useState } from "react"; // 这个 import 可以保留，但 useState 不再在组件内部用于selectedTab
import { View, StyleSheet, TouchableOpacity, Text, Platform } from "react-native";

// 定义 TopBar 组件的 props 类型
interface TopBarProps {
    selectedTab: string; // 当前选中的Tab名称
    onTabPress: (tabName: string) => void; // Tab被按下时调用的函数
}

// 将 props 添加到函数参数中
export default function TopBar({ selectedTab, onTabPress }: TopBarProps) {

    // handleTbaBarPress 现在只是调用父组件传递进来的 onTabPress 函数
    const handleTbaBarPress = (tabName: string) => {
        onTabPress(tabName);
    }

    return (
        <View style={styles.container}>
            <View style={styles.tabBar}>
                {/* 关注选项 */}
                <TouchableOpacity
                    style={styles.tabItem}
                    // 调用 handleTbaBarPress，它会再调用父组件的 onTabPress
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
        paddingTop: Platform.OS === 'ios' ? 46 : 0, // iOS 状态栏高度
    },
    tabBar: {
        flexDirection: 'row',
        height: 50, // 调整为合适的高度
        backgroundColor: '#fff',
        borderBottomWidth: 0.5, // 细一点的边框
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