import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TextInput, FlatList } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "react-native-vector-icons";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Course from "./components/Course";
import About from "./components/About";
import AddReview from "./components/AddReview";
import CourseDetails from "./components/CourseDetails";
import CoursesList from "./components/CoursesList";
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function StackNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="CoursesList" component={CoursesList} />
      <Stack.Screen name="CourseDetails" component={CourseDetails} />
      <Stack.Screen name="AddReview" component={AddReview} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Courses"
          component={StackNavigation}
          options={{
            title: "Courses",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="About us"
          component={About}
          options={{
            title: "About us",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="contacts" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
