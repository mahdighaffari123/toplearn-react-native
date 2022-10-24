import { View, Text } from "react-native";
import React from "react";

export default function TextField({ children, textStyle }) {
  return <Text className={`font-[sansMedium] ${textStyle}`}>{children}</Text>;
}
