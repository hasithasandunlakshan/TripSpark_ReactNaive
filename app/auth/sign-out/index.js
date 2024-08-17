import { View, Text } from 'react-native'
import React from 'react'
import { getAuth, signOut } from "firebase/auth";
import { auth } from '../../../configs/fireBaseConfig';

export default function index() {
  return (
    <View>
      <Text>index</Text>
    </View>
  )
}