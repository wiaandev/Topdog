import { View, Text } from 'react-native'
import React from 'react'
import { getCurrentUser } from '../../services/firebase-auth';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function CompeititonDetailScreen({navigation, route}) {

  const { id } = route.params;
  const currentUser = getCurrentUser();

  return (
    <SafeAreaView>
      <Text onPress={navigation.goBack}>Go Back</Text>
      <Text>{id}</Text>
      <Text>CompeititonDetailScreen</Text>
    </SafeAreaView>
  )
}