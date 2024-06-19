import { DarkTheme, DefaultTheme, ThemeProvider, useIsFocused, useNavigation } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack, useFocusEffect, usePathname } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import "react-native-reanimated";
import { store } from "@/redux/store/store";
import { Provider } from "react-redux";

import { useColorScheme } from "@/hooks/useColorScheme";
import Navbar from "@/components/Navbar";
import Toast, {BaseToast} from "react-native-toast-message";
import { Colors } from "@/constants/Colors";
import ChatButton from "@/components/ChatButton";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const pathname = usePathname();
  const [showNavbar, setShowNavbar] = useState(false);

  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    PoppinsBlack: require("../assets/fonts/Poppins-Black.ttf"),
    PoppinsBlackItalic: require("../assets/fonts/Poppins-BlackItalic.ttf"),
    PoppinsBold: require("../assets/fonts/Poppins-Bold.ttf"),
    PoppinsBoldItalic: require("../assets/fonts/Poppins-BoldItalic.ttf"),
    PoppinsExtraBold: require("../assets/fonts/Poppins-ExtraBold.ttf"),
    PoppinsExtraBoldItalic: require("../assets/fonts/Poppins-ExtraBoldItalic.ttf"),
    PoppinsExtraLight: require("../assets/fonts/Poppins-ExtraLight.ttf"),
    PoppinsExtraLightItalic: require("../assets/fonts/Poppins-ExtraLightItalic.ttf"),
    PoppinsItalic: require("../assets/fonts/Poppins-Italic.ttf"),
    PoppinsLight: require("../assets/fonts/Poppins-Light.ttf"),
    PoppinsLightItalic: require("../assets/fonts/Poppins-LightItalic.ttf"),
    PoppinsMedium: require("../assets/fonts/Poppins-Medium.ttf"),
    PoppinsMediumItalic: require("../assets/fonts/Poppins-MediumItalic.ttf"),
    PoppinsRegular: require("../assets/fonts/Poppins-Regular.ttf"),
    // PoppinsRegularItalic: require("../assets/fonts/Poppins-RegularItalic.ttf"),
    PoppinsSemiBold: require("../assets/fonts/Poppins-SemiBold.ttf"),
    PoppinsSemiBoldItalic: require("../assets/fonts/Poppins-SemiBoldItalic.ttf"),
    PoppinsThin: require("../assets/fonts/Poppins-Thin.ttf"),
    PoppinsThinItalic: require("../assets/fonts/Poppins-ThinItalic.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  const focus = useIsFocused();
  useEffect(() => {
    const navbarPages = ["home", "explore", "points", "profile"];
    if (pathname === "/") return setShowNavbar(false);
    if (pathname.includes("detail")) return setShowNavbar(false)
    if (pathname.includes("auth")) return setShowNavbar(false)
    if (pathname.includes("tour")) return setShowNavbar(false)
    if (pathname.includes("pembayaran")) return setShowNavbar(false)
    if (pathname.includes("menu-paket")) return setShowNavbar(true)
    if (navbarPages.includes(pathname.slice(1))) {
      setShowNavbar(true);
    }
  }, [pathname, focus]);

  if (!loaded) {
    return null;
  }

  const toastConfig = {
    success: (props) => (
      <BaseToast
        {...props}
        style={{ borderLeftColor: '#3BE23B' }}
        contentContainerStyle={{ paddingHorizontal: 15 }}
        text1Style={{
          fontFamily: "PoppinsSemiBold",
          fontSize: 16,
        }}
        text2Style={{
          fontFamily: "PoppinsRegular",
          fontSize: 14,
        }}
      />
    ),
    error: (props) => (
      <BaseToast
        {...props}
        style={{ borderLeftColor: '#FF2400' }}
        contentContainerStyle={{ paddingHorizontal: 15 }}
        text1Style={{
          fontFamily: "PoppinsSemiBold",
          fontSize: 16,
        }}
        text2Style={{
          fontFamily: "PoppinsRegular",
          fontSize: 14,
        }}
      />
    ),
    loading: (props) => (
      <BaseToast
        {...props}
        style={{ borderLeftColor: '#828282' }}
        contentContainerStyle={{ paddingHorizontal: 15 }}
        text1Style={{
          fontFamily: "PoppinsSemiBold",
          fontSize: 16,
        }}
        text2Style={{
          fontFamily: "PoppinsRegular",
          fontSize: 14,
        }}
      />
    )
  };
  

  return (
    <>
      <Provider store={store}>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="index" />
          <Stack.Screen name="+not-found" />
        </Stack>
        {showNavbar && <Navbar />}
        {showNavbar && <ChatButton />}
        <Toast config={toastConfig} />
      </Provider>
    </>
  );
}
