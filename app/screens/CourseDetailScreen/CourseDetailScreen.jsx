import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import Screen from "../../components/Screen/Screen";
import TextField from "../../components/TextField/TextField";

export default function CourseDetailScreen({ navigation, route }) {
  if (!route.params.item) return null;

  const { _id, title, imageUrl, info, price } = route.params.item;

  return (
    <Screen screenStyle="bg-[#242423]">
      <Image
        source={{ uri: `https://rnapi.ghorbany.dev/${imageUrl}` }}
        className="h-80 w-full"
        resizeMode="cover"
      />
      <View className="p-2 px-3 flex-row justify-between mt-3">
        <View>
          <TextField textStyle="text-[#cfcfcf] font-[sansLight]">
            نام دوره: <TextField className="font-[sansBold]">{title}</TextField>
          </TextField>
          <TextField textStyle="text-[#cfcfcf] font-[sansLight]">
            مدرس دوره:{" "}
            <TextField textStyle="font-[sansBold]">{"مهدی غفاری"}</TextField>
          </TextField>
        </View>
        <View>
          <TextField textStyle="text-[#cfcfcf] font-[sansLight]">
            زمان دوره:{" "}
            <TextField className="font-[sansBold]">{"15:00:00"}</TextField>
          </TextField>
          <TextField textStyle="text-[#cfcfcf] font-[sansLight]">
            مبلغ دوره:{" "}
            <TextField textStyle="font-[sansBold]">{price}</TextField>
          </TextField>
        </View>
      </View>
      {/* <View className="h-[1px] bg-[#414141] my-1 mx-2"></View> */}
      <View className="px-3 mt-2">
        <TextField textStyle="font-[sansBold] text-[#cfcfcf] text-[18px]">
          توضیحات:
        </TextField>
      </View>
      <ScrollView className="p-2">
        <TextField textStyle="text-[#7e7e7e]">{info}</TextField>
      </ScrollView>
    </Screen>
  );
}
