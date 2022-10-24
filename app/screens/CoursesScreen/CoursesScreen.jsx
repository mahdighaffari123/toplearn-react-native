import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";
import { View, FlatList } from "react-native";
import { useSelector } from "react-redux";
import CourseCard from "../../components/CourseCard/CourseCard";
export default function CoursesScreen({ navigation }) {
  const courses = useSelector((state) => state.courses);
  useEffect(() => {
    const myFunc = async () => {
      const token = await AsyncStorage.getItem("token");
      console.log("token", token);
    };
    myFunc();
  }, []);

  return (
    <View className="bg-[#242423] h-full">
      <View className="">
        <FlatList
          style={{ marginBottom: 10 }}
          data={courses}
          keyExtractor={(item) => item._id}
          contentContainerStyle={{ marginTop: 10, marginHorizontal: 5 }}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => {
            return (
              <CourseCard
                item={item}
                onPress={() => navigation.navigate("CourseDetail", { item })}
              />
            );
          }}
        />
      </View>
    </View>
  );
}
