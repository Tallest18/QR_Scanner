import { CameraView } from "expo-camera";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Index = () => {
  return (
    <SafeAreaView>
      <CameraView />
    </SafeAreaView>
  );
};

export default Index;
