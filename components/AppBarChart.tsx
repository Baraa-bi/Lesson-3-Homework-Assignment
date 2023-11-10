import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { BarChart } from "react-native-gifted-charts";

const AppBarChart = ({ data }: { data: Array<any> }) => {
  return (
    <BarChart
      barWidth={22}
      activeOpacity={0.8}
      noOfSections={9}
      barBorderRadius={5}
      frontColor="#a6cee3"
      data={data}
      isAnimated
      yAxisTextStyle={{ fontSize: 10 }}
      xAxisLabelTextStyle={{ fontSize: 10 }}
      animationDuration={3000}
      topColor={"gray"}
      yAxisThickness={0}
      renderTooltip={(c) => <Text>{c.value}</Text>}
      xAxisThickness={0}
    />
  );
};

export default AppBarChart;
