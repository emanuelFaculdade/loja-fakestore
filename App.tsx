import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Store } from "./src/screens/store";

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar style="auto" />
      <Store />
    </SafeAreaProvider>
  );
}
