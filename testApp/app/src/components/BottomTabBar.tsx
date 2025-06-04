import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Platform } from 'react-native';
import { useNavigation, CommonActions, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { MainTabsParamList, RootStackParamList } from '../../../App'; // 导入路由参数类型
import { AntDesign } from '@expo/vector-icons'; // 用于图标
import { BottomTabBarProps } from '@react-navigation/bottom-tabs'; // 导入 TabBar props 类型
import { getFocusedRouteNameFromRoute } from '@react-navigation/native'; // 一个辅助函数，虽然在这个版本代码里没用到

// 导出默认的 BottomTabBar 函数组件
export default function BottomTabBar({ state, descriptors, navigation, insets }: BottomTabBarProps) {
    // 这行获取当前聚焦（选中）的路由对象
    const focusedRoute = state.routes[state.index];
    // 这行获取当前聚焦路由的名称
    const focusedRouteName = focusedRoute.name; // 在这个版本代码里没用到 focusedRouteName

    // 这是一个处理Tab按钮按下的函数
    const onTabPress = (route: typeof state.routes[number], isSelected: boolean) => {
        // navigation.emit('tabPress', ...) 会触发一个事件，允许其他地方（比如屏幕组件）响应这个Tab按下的事件
        const event = navigation.emit({
            type: 'tabPress',
            target: route.key, // 事件的目标是这个Tab的唯一key
            canPreventDefault: true, // 这个事件可以被阻止默认行为
        });

        // 如果当前Tab没有被选中 (isSelected 为 false) 并且事件没有被阻止默认行为 (!event.defaultPrevented)
        if (!isSelected && !event.defaultPrevented) {
            // 那么我们就导航到被按下的Tab对应的页面
            navigation.dispatch({
                // CommonActions.navigate(route.name, route.params) 创建一个导航到指定路由的 Action（动作）
                ...CommonActions.navigate(route.name, route.params),
                target: state.key, // 导航的目标是这个BottomTabNavigator的状态的key
            });
        }
    };

    return (
        // 最外层的 View 容器
        <View style={[styles.container, { paddingBottom: insets.bottom }]}>
            {/* insets.bottom 来自 BottomTabBarProps，提供了底部安全区域的内边距，避免内容被手机底部的手势条或其他UI元素遮挡 */}
            {/* 这个 View 包含了所有的Tab按钮 */}
            <View style={styles.tabBar}>
                {/* state.routes 是一个数组，包含了导航器中所有路由（也就是所有Tab页面）的信息 */}
                {/* 我们使用 map 函数遍历这个数组，为每一个路由渲染一个对应的Tab按钮 */}
                {state.routes.map((route: typeof state.routes[number], index: number) => {
                    // descriptors[route.key] 包含了这个路由的一些描述信息，包括 screenOptions 里定义的选项
                    const { options } = descriptors[route.key];
                    // 这段代码尝试获取Tab的标签文本：首先看有没有 tabBarLabel 选项，没有的话看有没有 title 选项，都没有的话就直接用路由名 route.name
                    const label =
                        options.tabBarLabel !== undefined
                            ? options.tabBarLabel
                            : options.title !== undefined
                            ? options.title
                            : route.name;

                    // 判断当前遍历到的这个Tab是否是当前选中的Tab
                    const isSelected = state.index === index; // state.index 是当前选中Tab在 routes 数组中的索引

                    // 这是一个特殊的处理：如果路由名是 'PublishPage' (发布页面)
                    if (route.name === 'PublishPage') {
                        return (
                            // 就渲染一个特殊的“发布”按钮样式
                            <TouchableOpacity
                                key={route.key} // 每个列表项都需要一个唯一的 key
                                activeOpacity={0.85} // 按下时的透明度
                                style={styles.publishItem} // 应用发布按钮的外层样式
                                onPress={() => onTabPress(route, isSelected)} // 按下时调用 onTabPress 函数
                            >
                                {/* 发布按钮内部的 View，包含图标 */}
                                <View style={styles.publishButton}>
                                    {/* 使用 AntDesign 的加号圆形图标 */}
                                    <AntDesign name="pluscircle" size={32} color="#fff" />
                                </View>
                            </TouchableOpacity>
                        );
                    }

                    // 对于其他非 'PublishPage' 的路由，渲染通用的Tab按钮样式
                    return (
                        <TouchableOpacity
                            key={route.key}
                            style={styles.tabItem} // 应用通用Tab按钮样式
                            activeOpacity={0.7}
                            onPress={() => onTabPress(route, isSelected)}
                        >
                            {/* Tab的文本标签 */}
                            <Text
                                style={[ // 使用数组可以合并多个样式对象
                                    styles.tabText, // 通用文本样式
                                    isSelected // 根据是否选中应用不同的颜色和字重样式
                                        ? styles.selectedTabText
                                        : styles.unselectedTabText
                                ]}
                            >
                                {label as string} {/* 显示 Tab 文本 */}
                            </Text>
                        </TouchableOpacity>
                    );
                })}
            </View>
        </View>
    );
}

// StyleSheet.create 用于创建样式对象，可以提高性能
const styles = StyleSheet.create({
    container: {
        // backgroundColor: '#fff', // 容器背景白色，已移到 tabBar 样式中，这里可以保留以防万一
    },
    tabBar: {
        flexDirection: 'row', // 子元素水平排列
        height: 60, // 高度
        backgroundColor: '#fff', // 背景白色
        borderTopWidth: 1, // 顶部边框宽度
        borderColor: '#f0f0f0', // 顶部边框颜色（浅灰色）
        alignItems: 'center', // 子元素在垂直方向上居中对齐
        justifyContent: 'space-around', // 子元素在水平方向上均匀分布，两端留白
    },
    tabItem: {
        flex: 1, // 均分可用空间
        alignItems: 'center', // 子元素（Text）在水平方向上居中
        justifyContent: 'center', // 子元素（Text）在垂直方向上居中
    },
    tabText: {
        fontSize: 20, // 字体大小
    },
    selectedTabText: {
        color: '#FF2442', // 选中时的文本颜色（红色）
        fontWeight: 'bold', // 选中时字体加粗
    },
    unselectedTabText: {
        color: '#949494', // 未选中时的文本颜色（灰色）
    },
    publishItem: {
        flex: 1, // 均分可用空间
        alignItems: 'center',
        justifyContent: 'center',
        top: 10, // 向上偏移 10 个单位，让按钮看起来浮在 TabBar 上面
        paddingVertical: 5,
    },
    publishButton: {
        width: 52, // 宽度
        height: 52, // 高度
        borderRadius: 26, // 圆角半径，是宽高的一半，使其成为圆形
        backgroundColor: '#FF2442', // 背景颜色（红色）
        alignItems: 'center', // 子元素（Icon）在水平方向上居中
        justifyContent: 'center', // 子元素（Icon）在垂直方向上居中
        // 以下是阴影效果样式 (仅在 iOS 和 Android 部分版本支持)
        shadowColor: '#FF2442',
        shadowOpacity: 0.28,
        shadowRadius: 6,
        shadowOffset: { width: 0, height: 2 },
        elevation: 8, // Android 上的阴影
    },
});