import { Slot } from "expo-router";
import { ClerkProvider } from "@clerk/clerk-expo";
import { ThemeProvider } from "../context/ThemeContext";
import { tokenCache } from "../utils/tokenCache";
import { SafeAreaProvider } from "react-native-safe-area-context";

const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;

export default function RootLayout() {
  return (
    <ClerkProvider tokenCache={tokenCache} publishableKey={publishableKey}>
      <ThemeProvider>
        <SafeAreaProvider>
          <Slot />
        </SafeAreaProvider>
      </ThemeProvider>
    </ClerkProvider>
  );
}
