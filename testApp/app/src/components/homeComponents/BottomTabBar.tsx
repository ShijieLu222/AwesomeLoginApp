import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Platform } from 'react-native';
import { useNavigation, CommonActions, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { MainTabsParamList, RootStackParamList } from '../../../../App';
import { AntDesign } from '@expo/vector-icons';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

export default function BottomTabBar({ state, descriptors, navigation, insets }: BottomTabBarProps) {
    const focusedRoute = state.routes[state.index];
    const focusedRouteName = focusedRoute.name;

    const onTabPress = (route: typeof state.routes[number], isSelected: boolean) => {
        const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
        });

        if (!isSelected && !event.defaultPrevented) {
            navigation.dispatch({
                ...CommonActions.navigate(route.name, route.params),
                target: state.key,
            });
        }
    };

    return (
        <View style={[styles.container, { paddingBottom: insets.bottom }]}>
            <View style={styles.tabBar}>
                {state.routes.map((route: typeof state.routes[number], index: number) => {
                    const { options } = descriptors[route.key];
                    const label =
                        options.tabBarLabel !== undefined
                            ? options.tabBarLabel
                            : options.title !== undefined
                            ? options.title
                            : route.name;

                    const isSelected = state.index === index;

                    if (route.name === 'PublishPage') {
                        return (
                            <TouchableOpacity
                                key={route.key}
                                activeOpacity={0.85}
                                style={styles.publishItem}
                                onPress={() => onTabPress(route, isSelected)}
                            >
                                <View style={styles.publishButton}>
                                    <AntDesign name="pluscircle" size={32} color="#fff" />
                                </View>
                            </TouchableOpacity>
                        );
                    }

                    return (
                        <TouchableOpacity
                            key={route.key}
                            style={styles.tabItem}
                            activeOpacity={0.7}
                            onPress={() => onTabPress(route, isSelected)}
                        >
                            <Text
                                style={[
                                    styles.tabText,
                                    isSelected
                                        ? styles.selectedTabText
                                        : styles.unselectedTabText
                                ]}
                            >
                                {label as string}
                            </Text>
                        </TouchableOpacity>
                    );
                })}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
    },
    tabBar: {
        flexDirection: 'row',
        height: 60,
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderColor: '#f0f0f0',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    tabItem: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    tabText: {
        fontSize: 20,
    },
    selectedTabText: {
        color: '#FF2442',
        fontWeight: 'bold',
    },
    unselectedTabText: {
        color: '#949494',
    },
    publishItem: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        top: 10,
        paddingVertical: 5,
    },
    publishButton: {
        width: 52,
        height: 52,
        borderRadius: 26,
        backgroundColor: '#FF2442',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#FF2442',
        shadowOpacity: 0.28,
        shadowRadius: 6,
        shadowOffset: { width: 0, height: 2 },
        elevation: 8,
    },
});

