import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { BarChart, LineChart } from "react-native-gifted-charts";

const AppLineChart = ({ data }: { data: Array<any> }) => {
  return (
    <LineChart
      initialSpacing={20}
      data={data}
      spacing={40}
      thickness={3}
      xAxisTextNumberOfLines={1}
      focusedDataPointColor={'#357cb5'}
      focusedDataPointRadius={3}
      
      xAxisLabelTexts={Array(data.length)
        .fill(0)
        .map((i, c) => `${c}`)}
      showTextOnFocus
      yAxisColor="#d2d2d2"
      showVerticalLines
      verticalLinesColor="#f2f2f2"
      xAxisColor="#d2d2d2"
      color="#357cb5"
      showDataPointOnFocus
      focusEnabled
      showStripOnFocus
      stripWidth={3}
      stripColor="#357cb5" 
      noOfSections={9}
      isAnimated
      yAxisTextStyle={{ fontSize: 10 }}
      xAxisLabelTextStyle={{ fontSize: 10 }}
      yAxisThickness={0}
      xAxisThickness={0}
    />
  );
};

export default AppLineChart;

const styles = StyleSheet.create({
  containaer: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "#BDBDBD",
    shadowOpacity: 0.6,
    shadowRadius: 25,
    marginBottom: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: "500",
    textTransform: "uppercase",
  },
  text: {
    fontSize: 10,
    marginTop: 2,
    marginBottom: 25,
    textTransform: "uppercase",
  },
});
