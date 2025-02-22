import Button from "@/components/Button";
import { MoonStar } from "@/lib/icons/MoonStar";
import { Sun } from "@/lib/icons/Sun";
import { useColorScheme } from "@/lib/useColorScheme";
import { Alert, Pressable, Text, View } from "react-native";

function TooggleTheme() {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  const Icon = colorScheme === 'dark' ? Sun : MoonStar;
  return (
    <Pressable onPress={toggleColorScheme} className="p-2">
      <Icon className="w-6 h-6 text-foreground dark:text-foreground-dark" />
    </Pressable>
  );
}

export default function Index() {
  return (
    <View className="flex-1 bg-background dark:bg-background-dark">
      {/* Header with theme toggle */}
      <View className="flex-row justify-end p-4">
        <TooggleTheme />
      </View>

      {/* Main content */}
      <View className="flex-1 justify-center p-4">
        <View className="items-center mb-8">
          <Text className="text-4xl font-bold text-foreground dark:text-white mb-4">
            Welcome!
          </Text>
          <Text className="text-xl text-primary dark:text-white mb-2">
            This app includes
          </Text>
          <Text className="text-xl text-primary dark:text-white">
            <Text className="font-bold">NativeWind</Text> and <Text className="font-bold">RN Reusables</Text>!
          </Text>
        </View>
      </View>

      {/* Bottom navigation menu */}
      <View className="border-t border-border dark:border-white">
        <View className="flex-row justify-around p-2">
          <Pressable
            className="p-3"
            onPress={() => Alert.alert("Navigation", "Navigating to Home")}
          >
            <Text className="text-foreground dark:text-white">Home</Text>
          </Pressable>
          <Pressable
            className="p-3"
            onPress={() => Alert.alert("Navigation", "Navigating to Profile")}
          >
            <Text className="text-foreground dark:text-white">Profile</Text>
          </Pressable>
          <Pressable
            className="p-3"
            onPress={() => Alert.alert("Navigation", "Navigating to Settings")}
          >
            <Text className="text-foreground dark:text-white">Settings</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
