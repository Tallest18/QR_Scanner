import { useCameraPermissions } from "expo-camera";
import { Link } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
const Index = () => {
  const [permission, requestPermission] = useCameraPermissions();

  const ispermissionGranted = Boolean(permission?.granted);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>QR Code Scanner</Text>
      <View style={{ gap: 20 }}>
        <TouchableOpacity onPress={requestPermission}>
          <Text style={styles.button}>Request Permission</Text>
        </TouchableOpacity>
        <Link href={"/scanner"} asChild>
          <TouchableOpacity disabled={!ispermissionGranted}>
            <Text
              style={[
                styles.button,
                { opacity: ispermissionGranted ? 1 : 0.5 },
              ]}
            >
              Scan QR Code
            </Text>
          </TouchableOpacity>
        </Link>
      </View>
    </SafeAreaView>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    padding: 80,
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    color: "black",
  },
  button: {
    fontSize: 18,
    color: "blue",
    textAlign: "center",
  },
});
