import LoginButton from '@/components/ui/loginComponents/LoginButton';
import LoginTextInput from '@/components/ui/loginComponents/LoginTextInput';
import React, { useState } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';

export default function LoginPage() {
  const [password, setpassword] = useState('');
  const [account, setAccount] = useState('');
  
  const handleLogin=()=>{
    if (!account || !password) {
      Alert.alert('提示', '请输入账号和密码');
      return;
    }
    // 这里可以加上真正的登录请求
    Alert.alert('登录成功', `账号：${account}\n密码:${password}`);
  };
   
  return (
    <View style={styles.container}>
      <Text style={styles.header}>登入系统</Text>

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