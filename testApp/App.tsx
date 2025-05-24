import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import HomePage from './app/pages/homePage';
import LoginPage from './app/pages/loginPage';
import { store } from './app/store';

// const Stack = createStackNavigator();
// 声明路由参数类型
export type RootStackParamList = {
  LoginPage: undefined;
  homePage: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginPage">
        <Stack.Screen name="LoginPage" component={LoginPage} />
        <Stack.Screen name="homePage" component={HomePage} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}
