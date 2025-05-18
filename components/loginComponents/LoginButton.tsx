import React from 'react';
import { StyleSheet, Text, TouchableOpacity, ViewStyle } from 'react-native';

interface LoginButtonProps {
    title: string;
    onPress: () => void;
    style?: ViewStyle;
}

export default function LoginButton(props: LoginButtonProps) {
    return (
        <TouchableOpacity style={[styles.button, props.style]} onPress={props.onPress}>
            <Text style={styles.text}>{props.title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        width: 200,
        height: 48,
        backgroundColor: '#007aff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        marginTop: 50,
    },
    text: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});
