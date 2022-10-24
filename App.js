import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";
import { I18nManager } from "react-native";
import { Provider } from "react-redux";
import StackNavigator from "./app/navigators/StackNavigator";
import { store } from "./app/redux/store";
import { ToastProvider } from "react-native-toast-notifications";
I18nManager.allowRTL(true);
I18nManager.forceRTL(true);
const Stack = createNativeStackNavigator();
SplashScreen.preventAutoHideAsync();
export default function App() {
  const [fontsLoaded] = useFonts({
    sansLight: require("./app/assets/Fonts/IRANSansXLight.ttf"),
    sansBold: require("./app/assets/Fonts/IRANSansXBold.ttf"),
    sansMedium: require("./app/assets/Fonts/IRANSansXMedium.ttf"),
  });
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <Provider store={store}>
      <ToastProvider>
        <StackNavigator onLayoutRootView={onLayoutRootView} />
      </ToastProvider>
    </Provider>
  );
}
