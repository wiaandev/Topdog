import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {styles} from './EditDogScreen.style'

export default function EditDogScreen({navigation}) {
  return (
    <SafeAreaView>
        <Text onPress={() => navigation.navigate('AllDogs')}>Go Back</Text>
      <Text>EditDogScreen</Text>
    </SafeAreaView>
  )
}