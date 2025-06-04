// app/src/components/homeComponents/PostCard.tsx
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
// 导入 Post 类型
import { Post } from '../../types/types';

// 定义 PostCard 组件的 props 类型
interface PostCardProps {
    post: Post; // 接收一个帖子数据对象
    onPress?: (post: Post) => void; // 可选的点击处理函数
}

export default function PostCard({ post, onPress }: PostCardProps) {
    return (
        // 使用 TouchableOpacity 让整个卡片可点击
        <TouchableOpacity style={styles.card} onPress={() => onPress && onPress(post)}>
            {/* 帖子图片 */}
            <Image source={{ uri: post.imageUrl }} style={styles.postImage} resizeMode="cover" />

            {/* 帖子标题或描述 */}
            <Text style={styles.postTitle} numberOfLines={2}>{post.title}</Text>

            {/* 作者信息和点赞数 */}
            <View style={styles.footer}>
                {/* 作者头像和名字 */}
                <View style={styles.authorInfo}>
                    <Image source={{ uri: post.author.avatarUrl }} style={styles.authorAvatar} />
                    <Text style={styles.authorName} numberOfLines={1}>{post.author.name}</Text>
                </View>
                
                {/* 点赞图标和数量 */}
                <View style={styles.likesInfo}>
                    {/* 这里可以使用 AntDesign 或其他图标库的图标 */}
                    {/* <AntDesign name="hearto" size={14} color="#999" /> */}
                    <Text style={styles.likesCount}>{post.likes}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 8,
        margin: 5, // 卡片之间的间距
        overflow: 'hidden', // 确保图片不会超出圆角边框
        elevation: 2, // Android 阴影
        shadowColor: '#000', // iOS 阴影
        shadowOpacity: 0.1,
        shadowRadius: 4,
        shadowOffset: { width: 0, height: 2 },
        // 宽度需要在外部控制，以便实现两列布局
    },
    postImage: {
        width: '100%', // 图片宽度占满卡片
        // 图片高度会根据内容调整，或者设定最小/最大高度，或者根据图片比例计算
        minHeight: 100, // 示例最小高度
        backgroundColor: '#f0f0f0', // 图片加载前的占位背景色
    },
    postTitle: {
        fontSize: 14,
        color: '#333', // 标题颜色改深
        marginHorizontal: 8,
        marginTop: 8,
        marginBottom: 4,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 8,
        paddingBottom: 8,
        marginTop: 4,
    },
    authorInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1, // 占满剩余空间，防止名字太长挤压点赞数
        marginRight: 8,
    },
    authorAvatar: {
        width: 20,
        height: 20,
        borderRadius: 10,
        marginRight: 4,
        backgroundColor: '#f0f0f0',
    },
    authorName: {
        fontSize: 12,
        color: '#333', // 作者名字颜色改深
        flexShrink: 1, // 允许文本缩小
    },
    likesInfo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    likesCount: {
        fontSize: 12,
        color: '#666', // 点赞数颜色保持不变或根据需要调整
        marginLeft: 2, // 如果有点赞图标，这里留点空隙
    },
});