export interface User{
    id: string;
    account:string;
    password:string;
    name: string;
    phone: string;
    avatar: string;
    birthdate: string;
    gender: string;
    university: string;
    major: string;
}

// 定义帖子数据类型 (示例，根据实际API数据调整)
export interface Post {
    id: string;
    imageUrl: string;
    title: string;
    author: {
        name: string;
        avatarUrl: string;
    };
    likes: number;
    // ... 其他帖子属性
}
