import { View, FlatList, Image, TouchableOpacity } from "react-native";
import React from "react";
import TextField from "../../components/TextField/TextField";
import { Courses } from "../../mock/Courses";

export default function TopCoursesScreen() {
  return (
    <View className="bg-[#242423]">
      <View className="mb-3">
        <FlatList
          data={Courses}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ marginTop: 10, marginHorizontal: 5 }}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity className="mb-3 border p-2 border-[#585858] rounded-lg">
              <Image
                source={item.image}
                className="w-[100%] h-64 rounded-lg"
                resizeMode="cover"
              />

              <View className="items-start mx-2 flex-1">
                <View className="flex-row justify-between mt-2 w-full">
                  <TextField textStyle="text-[#c7c7c7]">
                    نام دوره: {item.title}
                  </TextField>
                  <TextField textStyle="text-[#c7c7c7] text-[12px]">
                    مبلغ دوره: {item.price} تومان
                  </TextField>
                </View>
                <View className="justify-between flex-row w-full flex-1 items-end">
                  <TextField textStyle="text-[#c7c7c7] text-[12px]">
                    استاد: {item.teacher}
                  </TextField>
                  <TextField textStyle="text-[#c7c7c7] text-[12px]">
                    مدت زمان: {item.time}
                  </TextField>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
}
