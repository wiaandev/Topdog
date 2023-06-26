import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { CompetitionProvider } from "./src/context/Competition.context";
import { UserProvider } from "./src/context/User.context";
import { NavigationContainer } from "@react-navigation/native";

// Screens
import LoginScreen from "./src/screens/LoginScreen/LoginScreen";
import RegisterScreen from "./src/screens/RegisterScreen/RegisterScreen";
import HomeScreen from "./src/screens/HomeScreen/HomeScreen";
import CompeititonDetailScreen from "./src/screens/CompetitionDetailScreen/CompeititonDetailScreen";
import DogsScreen from "./src/screens/DogsScreen/DogsScreen";
import AddDogScreen from "./src/screens/AddDogScreen/AddDogScreen";
import LeaderboardScreen from "./src/screens/LeaderboardScreen/LeaderboardScreen";
import ProfileScreen from "./src/screens/ProfileScreen/ProfileScreen";
import OnboardingScreen from "./src/screens/OnboardingScreen/OnboardingScreen";
import ResultScreen from "./src/screens/ResultsScreen/ResultScreen";

const Stack = createNativeStackNavigator();

const App = () => {
  //loading the fonts onto the app
  const [fontsLoaded] = useFonts({
    epilogueRegular: require("./assets/fonts/Epilogue-Regular.ttf"),
    epilogueBold: require("./assets/fonts/Epilogue-Bold.ttf"),
    caveat: require("./assets/fonts/Caveat-Regular.ttf"),
  });

  // UseEffect for splash screen
  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  //if check for the fonts
  if (!fontsLoaded) {
    return undefined;
  } else {
    SplashScreen.hideAsync();
  }

  return (
    <SafeAreaProvider>
      <UserProvider>
        <CompetitionProvider>
          <NavigationContainer>
            <Stack.Navigator
              initialRouteName="Login"
              screenOptions={{ headerShown: false }}
            >
              <Stack.Screen name="Login" component={LoginScreen} />
              <Stack.Screen name="Register" component={RegisterScreen} />
              <Stack.Screen name="Home" component={HomeScreen} />
              <Stack.Screen
                name="CDetail"
                component={CompeititonDetailScreen}
              />
              <Stack.Screen name="AllDogs" component={DogsScreen} />
              <Stack.Screen name="AddDog" component={AddDogScreen} />
              <Stack.Screen name="Leaderboard" component={LeaderboardScreen} />
              <Stack.Screen name="Onboarding" component={OnboardingScreen} />
              <Stack.Screen name="Profile" component={ProfileScreen} />
              <Stack.Screen name="Results" component={ResultScreen} />
            </Stack.Navigator>
          </NavigationContainer>
        </CompetitionProvider>
      </UserProvider>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
