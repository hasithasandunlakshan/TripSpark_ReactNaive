import { Tabs } from 'expo-router';
import React from 'react'
import { Colors } from '../../constants/Colors';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
function Tablayout() {
  return (
    <Tabs screenOptions={{headerShown:false}}>
        <Tabs.Screen name='mytrip'
        options={{
            tabBarLabel:"My Trip",
            tabBarActiveTintColor:Colors.PRIMARY,
            
            tabBarIcon:({color})=><MaterialIcons name="location-on" size={24} color={color} />,


            
        }}
        
        
        />
        <Tabs.Screen name='discover'
        
        options={{
            tabBarLabel:"Discover",
            tabBarActiveTintColor:Colors.PRIMARY,
            
            tabBarIcon:({color})=><FontAwesome5 name="globe-americas" size={24} color={color} />,


            
        }}/>
        <Tabs.Screen name='profile'
        options={{
            tabBarLabel:"Profile",
            tabBarActiveTintColor:Colors.PRIMARY,
            
            tabBarIcon:({color})=><FontAwesome name="user" size={24} color={color} />,


            
        }}
        />
    </Tabs>
  
  )
}

export default Tablayout;
