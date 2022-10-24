import { View, Text, Image, ActivityIndicator } from "react-native";
import FormField from "../../components/FormField/FormField";
import SubmitButton from "../../components/Button/SubmitButton/SubmitButton";
import { LoginSchema } from "../../schema/loginSchema";
import FormikForm from "../../components/FormikForm/FormikForm";
import { useState } from "react";
import { useToast } from "react-native-toast-notifications";
import { login } from "../../services/user";
export default function LoginScreen({ navigation }) {
  const [loading, setLoading] = useState(false);
  const Toast = useToast();
  const handleLogin = async (user) => {
    try {
      Toast.show("در حال برقراری ارتباط", {
        type: "info",
        duration: 1000,
      });
      const status = await login(user);
      if (status === 200) {
        Toast.hide();
        Toast.show("خوش آمدید", {
          type: "success",
        });
        navigation.reset({
          index: 0,
          routes: [{ name: "Home" }],
        });
      } else {
        Toast.hide();
        Toast.show("خطا در اطلاعات ورودی", {
          type: "danger",
          duration: 2000,
        });
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <View className="bg-[#4a546b] flex-1 items-center justify-center ">
      <View className="items-center ">
        <Image
          source={require("../../assets/logo.png")}
          className="h-24 w-24"
          resizeMode="contain"
        />
        <Text className="font-[sansBold] text-[#adadad]">همراه ما باشید</Text>
      </View>

      <FormikForm
        initialValues={{ email: "", password: "" }}
        onSubmit={(user) => {
          handleLogin(user);
          setLoading(true);
        }}
        validationSchema={LoginSchema}
      >
        <View className="mt-10">
          <FormField
            parentClassName="border border-[#adadad] rounded-md flex-row w-[75%] mt-4"
            placeholder="ایمیل کاربری"
            className="text-right text-white font-[sansMedium] justify-between p-3 px-2 flex-grow"
            placeholderTextColor="#eee"
            autoComplete="email"
            autoCorrect={false}
            icon="email"
            name="email"
            keyboardType="email-address"
          />
          <FormField
            parentClassName="border border-[#adadad] rounded-md flex-row w-[75%] mt-4"
            placeholder="کلمه عبور"
            className="text-right text-white font-[sansMedium] justify-between p-3 px-2 flex-grow"
            placeholderTextColor="#eee"
            autoComplete="password"
            autoCorrect={false}
            icon="eye-circle"
            name="password"
            secureTextEntry={true}
          />

          <View className="items-center">
            <SubmitButton
              title={
                !loading ? (
                  "ورود"
                ) : (
                  <ActivityIndicator
                    size={25}
                    color="#eee"
                    animating={loading}
                  />
                )
              }
            />
          </View>
        </View>
      </FormikForm>
    </View>
  );
}
