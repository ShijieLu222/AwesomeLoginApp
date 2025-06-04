import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { createBottomTabNavigator, BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { Provider } from 'react-redux';
import HomePage from './app/pages/homePage';
import LoginPage from './app/pages/loginPage';
import DiscoverPage from './app/pages/discoverPage'; // 导入 DiscoverPage
import PublishPage from './app/pages/publishPage'; // 导入 PublishPage
import MessagePage from './app/pages/messagePage'; // 导入 MessagePage
import MyPage from './app/pages/myPage';           // 导入 MyPage
import BottomTabBar from './app/src/components/BottomTabBar';

import { store } from './app/store';

// 声明路由参数类型
export type RootStackParamList = {
  LoginPage: undefined;
  MainTabs: undefined;
};

export type MainTabsParamList = {
    HomePage: undefined;
    DiscoverPage: undefined;
    PublishPage: undefined;
    MessagePage: undefined;
    MyPage: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<MainTabsParamList>();

function MainTabsNavigator() {
    return (
        <Tab.Navigator
            tabBar={(props: BottomTabBarProps) => <BottomTabBar {...props} />}
            screenOptions={{
                headerShown: false,
            }}
        >
            <Tab.Screen name="HomePage" component={HomePage} options={{ title: '首页' }} />
            <Tab.Screen name="DiscoverPage" component={DiscoverPage} options={{ title: '热门' }}/>
            <Tab.Screen name="PublishPage" component={PublishPage} options={{ title: '发布' }}/>
            <Tab.Screen name="MessagePage" component={MessagePage} options={{ title: '消息' }}/>
            <Tab.Screen name="MyPage" component={MyPage} options={{ title: '我的' }}/>
        </Tab.Navigator>
    );
}

export default function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator 
      initialRouteName="LoginPage"
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forFadeFromCenter,
        headerShown: false,
      }}
      >
        
        <Stack.Screen name="LoginPage" component={LoginPage} />
        <Stack.Screen name="MainTabs" component={MainTabsNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}