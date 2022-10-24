import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Screen from "../components/Screen/Screen";
import { getCourses } from "../redux/actions";
import { CoursesScreen } from "../screens";
import NewCoursesScreen from "../screens/NewCoursesScreen/NewCoursesScreen";
import TopCoursesScreen from "../screens/TopCoursesScreen/TopCoursesScreen";

const TopTab = createMaterialTopTabNavigator();

export default function TopTabNavigator() {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      dispatch(getCourses());
    };
    fetchData();
  }, []);
  return (
    <Screen>
      <TopTab.Navigator
        initialRouteName="AllCourses"
        screenOptions={{
          tabBarStyle: {
            backgroundColor: "#333533",
            height: 50,
          },
          tabBarItemStyle: {
            borderRadius: 10,
          },
          tabBarLabelStyle: {
            paddingBottom: 5,
            fontFamily: "sansLight",
            fontSize: 12,
          },
          tabBarInactiveTintColor: "#eeeeee68",
          tabBarActiveTintColor: "#fff",
          // tabBarActiveBackgroundColor: "#a1a1a1",
          headerShown: false,
        }}
      >
        <TopTab.Screen
          name="AllCourses"
          component={CoursesScreen}
          options={{ tabBarLabel: "همه دوره ها" }}
        />
        <TopTab.Screen
          name="NewCourses"
          component={NewCoursesScreen}
          options={{ tabBarLabel: "دوره های جدید" }}
        />
        <TopTab.Screen
          name="TopCourses"
          component={TopCoursesScreen}
          options={{ tabBarLabel: "دوره های محبوب" }}
        />
      </TopTab.Navigator>
    </Screen>
  );
}
