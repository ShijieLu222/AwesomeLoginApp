// import { RootStackParamList } from '@/App';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootStackParamList } from '../../App';
import LoginButton from '../src/components/loginComponents/LoginButton';
import LoginTextInput from '../src/components/loginComponents/LoginTextInput';
import { AppDispatch, RootState } from '../store';

export default function LoginPage() {
  const [password, setpassword] = useState('');
  const [account, setAccount] = useState('');
  const dispatch = useDispatch<AppDispatch>();
  const navigator = useNavigation<StackNavigationProp<RootStackParamList, 'LoginPage'>>();
  // Redux 拿到 loading、error、user 等状态
  const loading = useSelector((state: RootState) => state.user.loading);
  const error = useSelector((state: RootState) => state.user.error);


  const handleLogin = async () => {
    // if (!account || !password) {
    //   Alert.alert('提示', '请输入账号和密码');
    //   return;
    // }

    // dispatch(LoginThunk({ account: account, password: password }))
    //   .unwrap() // unwrap可直接拿到fulfilled值，也能捕捉rejected
    //   .then(res => {
    //     Alert.alert('登录成功', `欢迎：${res.user.name}`);
    //   })
    //   .catch(errMsg => {
    //     Alert.alert('登录失败', errMsg);
    //   });

    navigator.navigate('homePage');

  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Login System</Text>

      <LoginTextInput
        value={account} //对应输入框里面的值
        placeholder={'账号'}
        onChangeText={setAccount}
      />

      <LoginTextInput
        value={password} //对应输入框里面的值
        placeholder={'密码'}
        onChangeText={setpassword}
      />

      <LoginButton title='登入' onPress={handleLogin}></LoginButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingBottom: 100, // 让内容整体离底部远一些
  },
  header: {
    color: '#111',          // 黑色字体
    fontSize: 32,           // 字体大一点
    fontWeight: 'bold',     // 加粗
    marginBottom: 90,       // 下边距，让输入框离标题有距离
    letterSpacing: 2,       // 字间距更大一点（更高级）
    fontFamily: 'System',   // 默认字体，想特殊可自定义
  },
}); 