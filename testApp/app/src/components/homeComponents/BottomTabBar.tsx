import { StyleSheet, View } from "react-native";
import { Icon, TabBar } from "@ant-design/react-native";
import { Text } from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../../../App";



export default function BottomTabBar() {
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
    const [selectedTab, setSelectedTab] = useState('homePage');

    const onChangeTab = (tabName: string) => {
        setSelectedTab(tabName);
        navigation.navigate(tabName as keyof RootStackParamList);
    };

    return (
        <View style={styles.tabBar}>
            <TabBar
                unselectedTintColor="#949494"
                tintColor="#33A3F4"
                barTintColor="#f5f5f5"
            >
                <TabBar.Item
                    title="首页"
                    icon={<Icon name="home" />}
                    selected={selectedTab === 'homePage'}
                    onPress={() => onChangeTab('homePage')}
                >
                    {/* 这里可以留空，或者放内容 */}
                </TabBar.Item>
                <TabBar.Item
                    title="热门"
                    icon={<Icon name="like" />}
                    selected={selectedTab === 'discoverPage'}
                    onPress={() => onChangeTab('discoverPage')}
                />
                <TabBar.Item
                    title="发布"
                    icon={<Icon name="plus" />}
                    selected={selectedTab === 'publishPage'}
                    onPress={() => onChangeTab('publishPage')}
                />
                <TabBar.Item
                    title="消息"
                    icon={<Icon name="message" />}
                    selected={selectedTab === 'messagePage'}
                    onPress={() => onChangeTab('messagePage')}
                />
                <TabBar.Item
                    title="我的"
                    icon={<Icon name="user" />}
                    selected={selectedTab === 'myPage'}
                    onPress={() => onChangeTab('myPage')}
                />
            </TabBar>
        </View>
    );
}

const styles = StyleSheet.create({
    tabBar: {
        height: 750, // 设置底部导航栏高度
        flexDirection: 'row', // 横向排列
        justifyContent: 'space-around', // 子项平均分布
        alignItems: 'center', // 垂直居中
        backgroundColor: '#fff', // 背景颜色
        borderTopWidth: 1, // 添加顶部边框
        borderColor: '#eee', // 边框颜色
    },
    tabItem: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    tabText: {
        fontSize: 12,
        color: '#333',
    }
}) 