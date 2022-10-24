import { View, TextInput } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
export default function InputField({ parentClassName, icon, ...otherProps }) {
  return (
    <View className={parentClassName}>
      <TextInput {...otherProps} />
      {icon && (
        <View className="justify-center p-4">
          <MaterialCommunityIcons name={icon} size={20} color="#adadad" />
        </View>
      )}
    </View>
  );
}
