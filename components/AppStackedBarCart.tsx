import { Text } from "react-native";
import { BarChart } from "react-native-gifted-charts";

export default function AppStackedBarChart({ data }: { data: Array<any> }) {
  return (
    <BarChart
      barWidth={22}
      activeOpacity={0.8}
      noOfSections={10}
      barBorderRadius={3}
      frontColor="#a6cee3"
      data={data}
      isAnimated
      showFractionalValues
      intactTopLabel 
      yAxisTextStyle={{ fontSize: 10 }}
      xAxisLabelTextStyle={{ fontSize: 10 }}
      yAxisThickness={0}
      xAxisThickness={0}
      showVerticalLines 
      spacing={35}
      initialSpacing={10}
      stackData={data}
    />
  );
}
