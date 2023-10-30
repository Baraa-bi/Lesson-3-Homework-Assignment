import {
  SafeAreaView,
  FlatList,
  StyleSheet,
  View,
  Text,
  LogBox,
} from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import AppPieChart from "./components/AppPieChart";
import React, { useEffect } from "react";
import AppBarChart from "./components/AppBarChart";
import AppLineChart from "./components/AppLineChart";
import AppStackedBarChart from "./components/AppStackedBarCart";
import { CHART_TYPES, ICard, IOT_DASHBOARD_DATA } from "./lib";
import { NavigationContainer, useRoute } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
LogBox.ignoreAllLogs();

const HomeScreen = () => {
  const ChartComponent = ({
    type,
    data,
  }: {
    type: CHART_TYPES;
    data: Array<any>;
  }) => {
    switch (type) {
      case CHART_TYPES.PIE_CHART:
        return <AppPieChart data={data} />;
      case CHART_TYPES.VERTICAL_BAR_CHART:
        return <AppBarChart data={data} />;
      case CHART_TYPES.LINE_CHART:
        return <AppLineChart data={data} />;
      case CHART_TYPES.STACK_BAR_CHART:
        return <AppStackedBarChart data={data} />;
      default:
        return <></>;
    }
  };

  const renderItem = ({ item }: { item: ICard }) => {
    if (item.title)
      return (
        <View style={styles.card}>
          {item.title && <Text style={styles.title}>{item.title}</Text>}
          {item.text && <Text style={styles.text}>{item.text}</Text>}
          <ChartComponent type={item.type} data={item.data} />
        </View>
      );
    return <ChartComponent type={item.type} data={item.data} />;
  };

  return (
    <SafeAreaView style={styles.subContainer}>
      <FlatList
        renderItem={renderItem}
        data={IOT_DASHBOARD_DATA}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
    </SafeAreaView>
  );
};
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerLargeTitle: true,
        headerTintColor: "rgb(16, 127, 98)",
      }}
    >
      <Stack.Screen name="IOT Dashboard" component={HomeScreen} />
    </Stack.Navigator>
  );
};

const PlaceholderScreen = () => {
  const route = useRoute();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#e2e8f0",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          letterSpacing: 5,
          fontSize: 25,
          textTransform: "uppercase",
          color: "#64748b",
        }}
      >
        {route.name}
      </Text>
    </View>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          unmountOnBlur: true,
        }}
      >
        <Tab.Screen
          options={{ headerShown: false }}
          name="Dashboard"
          component={MainNavigator}
        />
        <Tab.Screen name="Categories" component={PlaceholderScreen} />
        <Tab.Screen name="Settings" component={PlaceholderScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subContainer: {
    flex: 1,
    backgroundColor: "#f1f5f9",
  },
  card: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    elevation: 4,
    shadowColor: "#BDBDBD",
    shadowOpacity: 0.6,
    shadowRadius: 25,
    marginBottom: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    textTransform: "uppercase",
  },
  text: {
    fontSize: 12,
    marginTop: 4,
    marginBottom: 25,
    textTransform: "uppercase",
  },
  list: {
    padding: 15,
  },
});
