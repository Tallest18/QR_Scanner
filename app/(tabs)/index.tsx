import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {useCameraPermissions} from 'expo-camera'

const Index = () => {

  const [permission, requestPermission] = useCameraPermissions();

  const ispermissionGranted = Boolean(permission?.granted);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>QR Code Scanner</Text>
      <View style={{gap: 20}}>
        <TouchableOpacity onPress={requestPermission}>
          <Text style={styles.button}>Request Permission</Text> 
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {alert('Scanning QR Code')}} disabled={!ispermissionGranted}>
          <Text style={[styles.button, { opacity: ispermissionGranted ? 1 : 0.5 }]}>Scan QR Code</Text> 
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default Index

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'black',
  },
  button: {
    fontSize: 18,
    color: 'blue',
    textAlign: "center",
  },
})
