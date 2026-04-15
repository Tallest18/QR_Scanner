import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import QRCode from "react-native-qrcode-svg";

const Generator = () => {
  const [inputValue, setInputValue] = React.useState("https://www.google.com");
  const [qrValue, setQrValue] = React.useState("inputValue");

  const handleInputChange = (text: string) => {
    setInputValue(text);
    setQrValue("");
  };
  const generateQrCode = () => {
    setQrValue(inputValue);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter text or URL here"
        autoCapitalize="none"
        value={inputValue}
        onChangeText={handleInputChange}
      />
      <TouchableOpacity
        onPress={generateQrCode}
        style={{
          marginBottom: 20,
          backgroundColor: "blue",
          padding: 10,
          borderRadius: 5,
        }}
      >
        <Text style={{ color: "white" }}>Generate QR Code</Text>
      </TouchableOpacity>

      {qrValue ? (
        <QRCode
          value={qrValue}
          size={200}
          color="black"
          backgroundColor="white"
        />
      ) : null}
    </View>
  );
};

export default Generator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    width: "100%",
  },
});
