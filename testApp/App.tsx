import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator,CardStyleInterpolators } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import HomePage from './app/pages/homePage';
import LoginPage from './app/pages/loginPage';
import DiscoverPage from './app/pages/discoverPage'; // 导入 DiscoverPage
import PublishPage from './app/pages/publishPage'; // 导入 PublishPage
import MessagePage from './app/pages/messagePage'; // 导入 MessagePage
import MyPage from './app/pages/myPage';           // 导入 MyPage

import { store } from './app/store';

// 声明路由参数类型
export type RootStackParamList = {
  LoginPage: undefined;
  HomePage: undefined;
  PublishPage: undefined;
  MessagePage: undefined;
  MyPage: undefined;
  DiscoverPage: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

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
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="DiscoverPage" component={DiscoverPage} />
        <Stack.Screen name="PublishPage" component={PublishPage} />
        <Stack.Screen name="MessagePage" component={MessagePage} />
        <Stack.Screen name="MyPage" component={MyPage} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}