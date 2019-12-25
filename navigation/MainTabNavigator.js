/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import React from 'react'
import { Platform } from 'react-native'
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation'

import TabBarIcon from '../components/TabBarIcon'
import HomeScreen from '../screens/HomeScreen'
import TestScreen from '../screens/TestSreen'
const config = Platform.select({
    web: { headerMode: 'screen' },
    default: {},
})

const HomeStack = createStackNavigator(
    {
        Home: HomeScreen,
        Test:TestScreen
    },
    config
)

HomeStack.navigationOptions = {
    tabBarLabel: 'Home',
    // eslint-disable-next-line react/display-name
    tabBarIcon: ({ focused }) => (
        <TabBarIcon
            focused={focused}
            name={
                Platform.OS === 'ios'
                    ? `ios-information-circle${focused ? '' : '-outline'}`
                    : 'md-information-circle'
            }
        />
    ),
}

HomeStack.path = ''


const TestStack = createStackNavigator(
    {
        Test: TestScreen
    },
    config
)

TestStack.navigationOptions = {
    tabBarLabel: 'Test',
    tabBarIcon: ({ focused }) => (
        <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
    ),
}


TestStack.path = ''

const tabNavigator = createBottomTabNavigator({
    HomeStack,
    TestStack
})

tabNavigator.path = ''

export default tabNavigator
