// app/pages/homePage.tsx
import React, { useState } from 'react'; // 导入 useState
import { View, StyleSheet, Text } from 'react-native'; // 导入 Text 用于示例内容
import TopBar from '../src/components/homeComponents/TopBar';

export default function HomePage() {
    const [selectedTopTab, setSelectedTopTab] = useState('发现'); // 默认选中"发现"

    // 处理顶部Tab点击的函数，更新状态
    const handleTopTabPress = (tabName: string) => {
        setSelectedTopTab(tabName);
    };

    // 根据选中的Tab渲染不同的内容
    const renderContent = () => {
        switch (selectedTopTab) {
            case '关注':
                return <Text style={styles.content}>这是关注页面的内容</Text>; // 示例内容
            case '发现':
                return <Text style={styles.content}>这是发现页面的内容 (将显示帖子列表)</Text>; // 示例内容
            case '附近':
                return <Text style={styles.content}>这是附近页面的内容</Text>; // 示例内容
            default:
                return null;
        }
    };

    return (
        <View style={styles.container}>
            <TopBar selectedTab={selectedTopTab} onTabPress={handleTopTabPress} />
            
            {renderContent()}

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff', // 确保背景是白色
    },
    content: {
        flex: 1, // 让内容区域填充剩余空间
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 22,
        marginTop: 20, // 和TopBar之间留点空隙
    }
});