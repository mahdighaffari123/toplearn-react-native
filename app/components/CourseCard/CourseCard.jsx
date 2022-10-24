import { Image, TouchableOpacity, View } from "react-native";
import TextField from "../TextField/TextField";

export default function CourseCard({ item, onPress }) {
  if (!item) return null;
  return (
    <TouchableOpacity
      className="mb-3 border p-2 border-[#585858] rounded-lg h-[360px]"
      onPress={onPress}
    >
      {item && (
        <>
          <Image
            source={{ uri: `https://rnapi.ghorbany.dev/${item?.imageUrl}` }}
            className="w-[100%] h-72 rounded-lg"
            resizeMode="cover"
          />
          <View className="items-start mx-2 flex-1">
            <View className="flex-row justify-between mt-2 w-full">
              <TextField textStyle="text-[#c7c7c7] text-[12px]">
                نام دوره: {item?.title}
              </TextField>
              <TextField textStyle="text-[#c7c7c7] text-[10px]">
                مبلغ دوره: {item?.price} تومان
              </TextField>
            </View>
            <View className="justify-between flex-row w-full flex-1 items-end">
              <TextField textStyle="text-[#c7c7c7] text-[12px]">
                استاد: {"مهدی غفاری"}
              </TextField>
              <TextField textStyle="text-[#c7c7c7] text-[12px]">
                مدت زمان: {"15:00:00"}
              </TextField>
            </View>
          </View>
        </>
      )}
    </TouchableOpacity>
  );
}
