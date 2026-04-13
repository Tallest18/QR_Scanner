import {Canvas, DiffReact, rect, rrect} from "@shopify/react-native-skia";
import { useEffect, useState } from "react";
import { Dimension, Platform, StyleSheet } from "react-native";

const {width, height} = Dimension.get("window");

const innerDimension = 300;

const outer = rrect(0, 0, width, height, 0);
const inner = rrect(
    rect(
        width / 2 - innerDimension / 2, 
        height / 2 - innerDimension / 2, 
        innerDimension, 
        innerDimension
        ),
        50,
        50
    );

    export default function Overlay() {
        return (
            <Canvas style={
                Platform>
                <DiffReact outer={outer} inner={inner} color="rgba(0, 0, 0, 0.5)" />
            </Canvas>
        )
    }

