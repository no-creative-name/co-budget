import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AddEntryScreen } from "./add-entry";
import { HomeScreen } from "./home";

type HomeNavigatorParams = {
  Root: undefined;
  AddEntry: undefined;
};

const Stack = createNativeStackNavigator<HomeNavigatorParams>();

export const HomeNavigator = () => {
  return <Stack.Navigator screenOptions={{
    headerShown: false,
  }}>
    <Stack.Screen name='Root' component={HomeScreen}></Stack.Screen>
    <Stack.Screen name='AddEntry' component={AddEntryScreen}></Stack.Screen>
  </Stack.Navigator>
}
