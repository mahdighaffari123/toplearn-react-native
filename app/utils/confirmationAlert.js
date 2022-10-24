import { Alert, BackHandler } from "react-native";
export const confirmationAlert = () => {
  return Alert.alert(
    "اتصال اینترنت",
    `برای استفاده از اپلیکیشن باید به اینترنت متصل باشید.`,
    [
      {
        text: "باشه",
        onPress: BackHandler.exitApp,
      },
    ],
    {
      cancelable: false,
    }
  );
};
