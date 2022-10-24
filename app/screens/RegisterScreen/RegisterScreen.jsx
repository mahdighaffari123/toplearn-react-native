import { View, Text, Image, ActivityIndicator } from "react-native";
import { Formik } from "formik";
// import { register } from "../services/user";
import { useState } from "react";
import useKeyboard from "../../hooks/useKeyboard";
import FormField from "../../components/FormField/FormField";
import SubmitButton from "../../components/Button/SubmitButton/SubmitButton";
import { userRegisterSchema } from "../../schema/registerSchema";
// import { useToast } from "react-native-toast-notifications";
export default function RegisterScreen({ navigation }) {
  const [loading, setLoading] = useState(false);
  // const Toast = useToast();
  // const handleRegisteration = async (user) => {
  //   try {
  //     const status = await register(user);
  //     if (status === 201) {
  //       setLoading(false);
  //       Toast.show("ثبت نام شما با موفقیت انجام شد", {
  //         type: "success",
  //       });
  //       navigation.navigate("Login");
  //     } else {
  //       console.log("server error");
  //       setLoading(false);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  return (
    <View className={`bg-[#4a546b] flex-1 items-center justify-center`}>
      {!useKeyboard() ? (
        <View className="items-center ">
          <Image
            source={require("../../assets/logo.png")}
            className="h-24 w-24"
            resizeMode="contain"
          />
          <Text className="font-[sansBold] text-[#adadad] ">
            به تاپ برن خوش آمدید
          </Text>
        </View>
      ) : null}

      <Formik
        initialValues={{
          email: "",
          password: "",
          fullname: "",
          passwordConfirmation: "",
        }}
        onSubmit={(user) => {
          handleRegisteration(user);
          setLoading(true);
        }}
        validationSchema={userRegisterSchema}
      >
        {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
          <View className="mt-10">
            <FormField
              parentClassName="border border-[#adadad] rounded-md flex-row w-[75%] mt-4"
              placeholder="نام و نام خانوادگی"
              className="text-right text-white font-[sansMedium] justify-between p-3 px-2 flex-grow"
              placeholderTextColor="#eee"
              name="fullname"
              autoCorrect={false}
              icon="account-circle"
            />
            <FormField
              parentClassName="border border-[#adadad] rounded-md flex-row w-[75%] mt-4"
              placeholder="ایمیل کاربری"
              className="text-right text-white font-[sansMedium] justify-between p-3 px-2 flex-grow"
              placeholderTextColor="#eee"
              name="email"
              autoCorrect={false}
              icon="email"
            />
            <FormField
              parentClassName="border border-[#adadad] rounded-md flex-row w-[75%] mt-4"
              placeholder="کلمه عبور"
              className="text-right text-white font-[sansMedium] justify-between p-3 px-2 flex-grow"
              placeholderTextColor="#eee"
              name="password"
              autoCorrect={false}
              icon="eye-circle"
            />

            <FormField
              parentClassName="border border-[#adadad] rounded-md flex-row w-[75%] mt-4"
              placeholder="تکرار کلمه عبور"
              className="text-right text-white font-[sansMedium] justify-between p-3 px-2 flex-grow"
              placeholderTextColor="#eee"
              name="passwordConfirmation"
              autoCorrect={false}
              icon="eye-circle"
            />

            <View className="items-center">
              <SubmitButton
                title={
                  !loading ? (
                    "ثبت نام"
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
        )}
      </Formik>
    </View>
  );
}
