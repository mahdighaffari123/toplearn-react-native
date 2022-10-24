import { Alert, View, FlatList, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import {
  GestureHandlerRootView,
  Swipeable,
} from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MyCoursesData } from "../../mock/Mycourses";
import Screen from "../../components/Screen/Screen";
import TextField from "../../components/TextField/TextField";
const confirmationAlert = (course, onPerss) => {
  return Alert.alert(
    course.title,
    `آیا از حذف دوره ${course.title} مطمئن هستید؟`,
    [
      {
        text: "انصراف",
        onPress: () => {},
        style: "cancel",
      },
      {
        text: "بله، پاک کن",
        onPress: onPerss,
      },
    ],
    {
      cancelable: false,
    }
  );
};
const deleteAction = (course, onPress) => {
  return (
    <TouchableOpacity
      className="bg-red-500 justify-center w-16 items-center"
      onPress={() => confirmationAlert(course, onPress)}
    >
      <MaterialCommunityIcons name="trash-can" size={35} color="#fff" />
    </TouchableOpacity>
  );
};
export default function MyCoursesScreen() {
  const [courses, setCourses] = useState(MyCoursesData);

  const handleDelete = (course) => {
    setCourses(MyCoursesData?.filter((item) => item.id !== course.id));
  };
  return (
    <Screen screenStyle="bg-[#242423]">
      <View className="mt-4">
        <FlatList
          data={courses}
          contentContainerStyle={{
            paddingHorizontal: 0,
          }}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <GestureHandlerRootView style={{ marginBottom: 10 }}>
              <Swipeable
                renderLeftActions={() =>
                  deleteAction(item, () => handleDelete(item))
                }
              >
                <View className="border-t border-b border-[#4d4c4c] p-1 flex-row">
                  <Image
                    source={item.image}
                    className="h-20 w-20"
                    resizeMode="contain"
                  />
                  <View className="items-start ml-3 justify-center">
                    <TextField textStyle="text-white text-[14px] font-[sansBold]">
                      {item.title}
                    </TextField>
                    <TextField textStyle="text-white text-[8px] text-center text-[#b6b6b6]">
                      {item.desc}
                    </TextField>
                  </View>
                </View>
              </Swipeable>
            </GestureHandlerRootView>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </Screen>
  );
}
