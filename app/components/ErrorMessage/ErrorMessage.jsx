import { View, Text } from "react-native";
import React from "react";

export default function ErrorMessage({ error }) {
  if (!error) return null;
  return (
    <View>
      <Text className="text-[#f8a0a0] mt-1 font-[sansLight]">{error}</Text>
    </View>
  );
}
