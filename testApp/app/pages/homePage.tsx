// app/pages/homePage.tsx
import React, { useState, useEffect } from 'react'; // 导入 useState 和 useEffect
import { View, StyleSheet, Text, FlatList } from 'react-native'; // 导入 Text 和 FlatList 用于示例内容
import TopBar from '../src/components/homeComponents/TopBar';
import PostCard from '../src/components/homeComponents/PostCard'; // 确保导入了你的 PostCard 组件
import { Post } from '../src/types/types'; // 从 types.ts 导入 Post 类型

export default function HomePage() {
    // 模拟一些帖子数据
    const mockPosts: Post[] = Array.from({ length: 20 }).map((_, i) => ({
        id: String(i),
        imageUrl: `https://via.placeholder.com/300x${200 + i * 10}`, // 模拟不同高度的图片
        title: `这是第 ${i + 1} 个帖子，标题可能会比较长，看看会不会换行...`,
        author: {
            name: `用户${i + 1}`,
            avatarUrl: `https://i.pravatar.cc/150?img=${i}`, // 模拟用户头像
        },
        likes: Math.floor(Math.random() * 1000),
    }));

    const [selectedTopTab, setSelectedTopTab] = useState('发现'); // 默认选中"发现"
    const [posts, setPosts] = useState<Post[]>([]); // 明确 posts 状态是一个 Post 对象的数组

    // 使用 useEffect 在组件加载后设置模拟数据
    useEffect(() => {
        // 在这里可以根据 selectedTopTab 加载对应Tab的数据
        // 暂时先将所有模拟数据都加载到 "发现" Tab
        if (selectedTopTab === '发现') {
             setPosts(mockPosts);
        } else {
            setPosts([]); // 其他Tab暂时清空数据
        }
       
        // 实际应用中，你会在这个 effect 中调用 API 获取数据
        // 例如：fetchPosts(selectedTopTab).then(data => setPosts(data));

    }, [selectedTopTab]); // 依赖项数组，当 selectedTopTab 变化时重新运行 effect

    // 处理顶部Tab点击的函数，更新状态
    const handleTopTabPress = (tabName: string) => {
        setSelectedTopTab(tabName);
        // 当 Tab 切换时，可能需要清空当前帖子列表以便显示加载状态或新数据
        // setPosts([]); // 根据你的加载逻辑决定是否需要在这里清空
    };

    // 这是 FlatList 需要的渲染函数
    // 它接收一个对象作为参数，其中包含 { item, index, separators }
    // 我们主要关心 item，它就是数据数组 (posts) 中的当前项
    const renderPostItem = ({ item }: { item: Post }) => { // 明确 item 的类型是 Post
        // 在这里，我们返回一个 PostCard 组件，并将当前遍历到的 item (也就是单个帖子数据)
        // 作为 prop (命名为 post) 传递给 PostCard
        return (
            <PostCard
                post={item} // 将单个帖子数据传递给 PostCard 的 post 属性
                onPress={() => console.log('点击了帖子:', item.id)} // 可以添加点击事件处理
            />
        );
    };

    // 根据选中的Tab渲染不同的内容
    const renderContent = () => {
        switch (selectedTopTab) {
            case '关注':
                return <Text style={styles.contentText}>这是关注页面的内容</Text>;
            case '发现':
                // 在发现页面渲染帖子列表
                return (
                    <FlatList
                        data={posts} // <-- 这里是 FlatList 的数据源，就是一个帖子对象的数组
                        renderItem={renderPostItem} // <-- 这里指定了如何渲染数组中的每一项，就是调用我们上面定义的 renderPostItem 函数
                        keyExtractor={item => item.id} // <-- 为列表中的每个项生成一个唯一的 key，通常使用数据的 id
                        contentContainerStyle={styles.listContent} // <-- 列表内容容器的样式，可以设置内边距等
                        // ListEmptyComponent={() => <Text>暂无内容</Text>} // 数据为空时显示
                        // onEndReached={} // 实现无限滚动加载更多时使用
                        // onEndReachedThreshold={0.5} // 触发加载的阈值
                        // ListHeaderComponent={} // 列表头部组件
                        // ListFooterComponent={} // 列表底部组件 (加载中提示等)
                    />
                );
            case '附近':
                return <Text style={styles.contentText}>这是附近页面的内容</Text>;
            default:
                return null;
        }
    };

    return (
        <View style={styles.container}>
            <TopBar selectedTab={selectedTopTab} onTabPress={handleTopTabPress} />

            {/* 渲染根据选中Tab决定的内容区域 */}
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
    },
    contentText: { // 用于示例文本的样式
        flex: 1,
        textAlign: 'center',
        marginTop: 50,
        fontSize: 18,
        color: '#666',
    },
    listContent: {
        paddingHorizontal: 5,
        paddingTop: 10,
    }
});