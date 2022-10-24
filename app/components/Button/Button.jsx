import { Text, TouchableOpacity } from "react-native";
import React from "react";

export default function Button({
  buttonClassName,
  textClassName,
  children,
  onPress,
}) {
  return (
    <TouchableOpacity className={buttonClassName} onPress={onPress}>
      <Text className={textClassName}>{children}</Text>
    </TouchableOpacity>
  );
}
