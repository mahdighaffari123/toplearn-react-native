import { View, Text, ImageBackground, Image, BackHandler } from "react-native";
import React, { useEffect } from "react";
import Button from "../../components/Button/Button";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StackActions, useNavigationState } from "@react-navigation/native";
import { useDispatch } from "react-redux";

import { checkConnection } from "../../utils/checkConnection";
import { confirmationAlert } from "../../utils/confirmationAlert";
import { decodedToken } from "../../utils/jwt";
import { userAction } from "../../redux/actions";

export default function WelcomeScreen({ navigation }) {
  const screenIndex = useNavigationState((state) => state.index);
  const dispatch = useDispatch();
  useEffect(() => {
    let currentCount = 0;
    if (screenIndex <= 0) {
      BackHandler.addEventListener("hardwareBackPress", () => {
        if (currentCount === 1) {
          BackHandler.exitApp();
          return true;
        }
        currentCount += 1;

        setTimeout(() => {
          currentCount = 0;
        }, 1000);
        return true;
      });
    }
  }, []);
  useEffect(() => {
    const checkForNet = async () => {
      const net = await checkConnection();
      if (!net.isConnected) {
        confirmationAlert();
      } else {
        const token = await AsyncStorage.getItem("token");
        const userId = JSON.parse(await AsyncStorage.getItem("userId"));

        if (token !== null && userId !== null) {
          const decoded = decodedToken(token);
          if (decoded.user.userId === userId) {
            dispatch(userAction(decoded.user));
            navigation.dispatch(StackActions.replace("Home"));
          } else {
            await AsyncStorage.removeItem("token");
            await AsyncStorage.removeItem("userId");
            navigation.navigate("Login");
          }
        }
      }
    };
    checkForNet();
  }, []);

  return (
    <ImageBackground
      source={require("../../assets/bg1.jpg")}
      className="h-full w-full"
      blurRadius={3}
    >
      <View className="justify-end h-full">
        <View className="">
          <Image
            source={require("../../assets/logo.png")}
            className="h-24 w-24 mx-auto mb-10"
            resizeMode="contain"
          />
          <Text className="text-center mb-3 text-white font-[sansBold] text-lg">
            خود آموزی، کسب تجربه، ورود به بازار کار
          </Text>
        </View>
        <View className="flex-row mb-10 justify-evenly">
          <Button
            textClassName="text-white text-center font-[sansMedium]"
            buttonClassName="bg-[#5F9DF7] p-4 rounded-md w-[40%]"
            onPress={() => navigation.navigate("Login")}
          >
            ورود
          </Button>
          <Button
            textClassName="text-white text-center font-[sansMedium]"
            buttonClassName="bg-[#5F9DF7] p-4 rounded-md w-[40%]"
            onPress={() => navigation.navigate("Register")}
          >
            ثبت نام
          </Button>
        </View>
      </View>
    </ImageBackground>
  );
}
