# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

AwesomeLoginApp/
│
├── app/           # 入口目录，包含页面和路由相关代码（新版Expo推荐结构）
│    ├── (tabs)/           # Tab页面相关文件夹
│    ├── _layout.tsx       # 路由和页面的入口（新版Expo专用，像App.tsx）
│    ├── +not-found.tsx    # 404页面
│
├── assets/        # 静态资源（图片、icon等）
│
├── components/    # 公共组件（可以多页面复用的小功能/控件）
│    ├── Collapsible.tsx
│    ├── ExternalLink.tsx
│    ├── HapticText.tsx
│    ├── HelloWave.tsx
│    ├── ParallaxScrollView.tsx
│    ├── ThemedText.tsx
│    ├── ThemedView.tsx
│
├── constants/     # 常量、配色、主题设置等
│    ├── Colors.ts
│
├── hooks/         # 自定义Hook
│    ├── useColorScheme.ts
│    ├── useColorScheme.web.ts
│    ├── useThemeColor.ts
│
├── node_modules/  # 依赖库（自动生成）
│
├── package.json   # 项目依赖、脚本和基本信息
├── app.json       # Expo 项目配置文件
├── tsconfig.json  # TypeScript 配置
├── README.md
└── ...
