import { Canvas, DiffReact, rect, rrect } from "@shopify/react-native-skia";
import { Dimensions, Platform, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");

const innerDimension = 300;

const outer = rrect(0, 0, width, height, 0);
const inner = rrect(
  rect(
    width / 2 - innerDimension / 2,
    height / 2 - innerDimension / 2,
    innerDimension,
    innerDimension,
  ),
  50,
  50,
);

export default function Overlay() {
  return (
    <Canvas
      style={
        Platform.OS === "android" ? { flex: 1 } : StyleSheet.absoluteFillObject
      }
    >
      <DiffReact outer={outer} inner={inner} color="black" opacity={0.5} />
    </Canvas>
  );
}
