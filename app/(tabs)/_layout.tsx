import { Tabs } from "expo-router";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StatusBar } from "react-native";


const TabLayout = () => {
  return (
    <>
      <StatusBar barStyle="dark-content"/>
      <Tabs screenOptions = {{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: 'gray',

    }}>
      <Tabs.Screen name="index" options={{
        tabBarIcon: ({color}) => (
          <MaterialCommunityIcons name="qrcode-scan" size={24} color={color} />
        ),
      }} />
      <Tabs.Screen name="generator" options={{ tabBarIcon: ({ color }) => <MaterialCommunityIcons name="qrcode-plus" size={24} color={color} /> }} />
    </Tabs>
    </>
  );
};

export default TabLayout;