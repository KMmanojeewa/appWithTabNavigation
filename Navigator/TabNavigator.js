import React from 'react';
import { Text } from "react-native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from "../screens/HomeScreen";
import SettingsScreen from "../screens/SettingsScreen";
import NotificationsScreen from "../screens/NotificationsScreen";

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={
                    {
                        tabBarIcon:({tintColor})=>(
                            <Icon name="home" color={tintColor} size={25}/>
                        )
                    }
                }
            />
            <Tab.Screen
                name="Settings"
                component={SettingsScreen}
                options={
                    {
                        tabBarIcon:({tintColor})=>(
                            <Icon name="settings" color={tintColor} size={25}/>
                        )
                    }
                }
            />
            <Tab.Screen
                name="Notifications"
                component={NotificationsScreen}
                options={
                    {
                        tabBarIcon:({ focused, color, size }) => {
                            color = focused ? 'rgba(0,138,121,0.96)' : '#25656b';
                            size = focused ? 28 : size;
                            return <Icon name="notifications" color={color} size={size}/>;
                        },
                        tabBarLabel:({ focused, color, size }) => {
                            color = focused ? 'rgba(0,138,121,0.96)' : '#25656b';
                            return <Text color={color} style={{fontSize:10, color:color}} >Notifications</Text>;
                        },
                        tabBarBadge: 3,
                        tabBarBadgeStyle: ({backgroundColor:'#dd666a'})
                    }
                }
            />
        </Tab.Navigator>
    )
}

export default Tabs;
