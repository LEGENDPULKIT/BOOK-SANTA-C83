import React, { Component } from 'react';
import { View, StyleSheet, Text, FlatList,TouchableOpacity } from 'react-native';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {AppTabNavigator} from './AppTabNavigator';
import CustomSideBarMenu from './CustomSideBarMenu';
import SettingScreen from '../screens/SettingScreen';
import MyDonationScreen from '../screens/MyDonationScreen';
import Noticification from '../screens/Noticification'

export const AppDrawerNavigator=createDrawerNavigator({
    Home:{
        screen:AppTabNavigator
    },
    Settings:
    {
        screen:SettingScreen
    },
    MyDonation:
    {
        screen:MyDonationScreen
    },

    Noticifications:
    {
        screen:Noticification
    },

},
{
    contentComponent:CustomSideBarMenu
},
{
    initialRouteName:'Home'
}
)