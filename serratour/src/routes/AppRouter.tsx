import React from 'react'
import Home from '../screens/Home'
import Contato from '../screens/Contato'
import Quem_somos from '../screens/Quem_somos'
import Pontos_turisticos from '../screens/Pontos_turisticos'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { global } from '../styles/global'
import { Feather } from '@expo/vector-icons'

const Tab = createBottomTabNavigator()

export default function AppRouter() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: global.primaria,
                tabBarInactiveTintColor: global.secundaria,
            }}>
            <Tab.Screen name='Home' component={Home} options={{
                tabBarIcon: ({ color, size }) => {
                    return <Feather name='home' color={color} size={size} />
                }
            }} />
            <Tab.Screen name='Pontos Turísticos' component={Pontos_turisticos} options={{
                tabBarIcon: ({ color, size }) => {
                    return <Feather name='camera' color={color} size={size} />
                }
            }} />
            <Tab.Screen name='Quem Somos' component={Quem_somos} options={{
                tabBarIcon: ({ color, size }) => {
                    return <Feather name='globe' color={color} size={size} />
                }
            }} />
            <Tab.Screen name='Contato' component={Contato} options={{
                tabBarIcon: ({ color, size }) => {
                    return <Feather name='message-circle' color={color} size={size} />
                }
            }} />
        </Tab.Navigator>
    )
}
