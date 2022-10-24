import { View, Image, TouchableOpacity, FlatList } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useSelector } from "react-redux";
import Screen from "../../components/Screen/Screen";
import TextField from "../../components/TextField/TextField";
import { MyCoursesData } from "../../mock/Mycourses";
export default function AccountScreen({ navigation }) {
  const user = useSelector((state) => state.user);

  const handlelogout = async () => {
    await AsyncStorage.removeItem("token");
    await AsyncStorage.removeItem("userId");
    navigation.navigate("Welcome");
  };

  return (
    <Screen screenStyle="bg-[#242423]">
      <View className="p-4">
        <View className="flex-row justify-between">
          <TouchableOpacity className="border rounded-full border-[#7e7e7e] p-2">
            <MaterialCommunityIcons
              name="account-edit-outline"
              color="#bdbdbd"
              size={25}
            />
          </TouchableOpacity>
          <TouchableOpacity
            className="border rounded-full border-[#7e7e7e] p-2"
            onPress={handlelogout}
          >
            <MaterialCommunityIcons name="power" color="#bdbdbd" size={25} />
          </TouchableOpacity>
        </View>
        <View className="items-center mt-10">
          <TouchableOpacity>
            <Image
              source={require("../../assets/logo.png")}
              className="w-20 h-20 rounded-full "
              resizeMode="contain"
            />
          </TouchableOpacity>
          <TextField textStyle="text-[#cecece] mb-2">
            {" "}
            {user?.fullname}
          </TextField>
          <TextField textStyle="text-[#999999]  font-[sansLight]">
            09053281228
          </TextField>
          <TextField textStyle="text-[#6d6d6d]">{user?.email}</TextField>
        </View>
      </View>
      <View className="h-[1px] bg-[#414141] mt-4 mx-2"></View>

      <View className="mx-2 mb-2 mt-4">
        <TextField textStyle="text-[#c7c7c7] font-[sansBold]">
          دوره های پیشنهادی
        </TextField>
      </View>
      <View>
        <FlatList
          horizontal
          data={MyCoursesData}
          contentContainerStyle={{
            paddingHorizontal: 0,
          }}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <View className="border border-[#4d4c4c] mx-2 p-2 rounded-lg items-center w-32">
              <Image
                source={item.image}
                className="h-20 w-20"
                resizeMode="contain"
              />
              <TextField textStyle="text-white text-[10px]">
                {item.title}
              </TextField>
              <TextField textStyle="text-white text-[8px] text-center text-[#b6b6b6] font-[sansLight]">
                {item.desc}
              </TextField>
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </Screen>
  );
}
