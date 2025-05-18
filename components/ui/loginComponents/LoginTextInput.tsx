import { StyleSheet, TextInput, View } from "react-native";
interface TextInputProps {
    value: string;
    placeholder: string;
    onChangeText: (text: string) => void;
    secureTextEntry?: boolean;
}
// export default function TextInput(props:TextInputProps)=>{}  1.props:小写 2.没有箭头

export default function LoginTextInput(props: TextInputProps) {
    return (
        <View style={styles.container}>
            <TextInput style={styles.input}
                value={props.value}
                placeholder={props.placeholder}
                onChangeText={props.onChangeText}
                secureTextEntry={props.secureTextEntry}

                autoCapitalize="none"
                autoCorrect={false}
            />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        width: "100%", // 撑满父级
        alignItems: "center", // 内容居中
        marginBottom: 16,
    },
    input: {
        width: "90%",      // 宽度占90%
        height: 44,        // 高度44px
        borderWidth: 1,    // 边框宽度
        borderColor: "#ccc",// 边框颜色
        borderRadius: 8,   // 圆角8px
        paddingHorizontal: 12, // 左右内边距
        backgroundColor: "#fafafa", // 浅灰背景
        fontSize: 16,      // 字体大小
        color: "#333",     // 字体颜色
    },


})