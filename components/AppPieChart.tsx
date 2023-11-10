import { Text, View } from "react-native";
import { PieChart } from "react-native-gifted-charts";

export default function AppPieChart({ data }: { data: Array<any> }) {
  const renderDot = (color: string) => {
    return (
      <View
        style={{
          height: 10,
          width: 10,
          borderRadius: 5,
          backgroundColor: color,
          marginRight: 10,
        }}
      />
    );
  };

  const LegenedComponent = () => {
    return (
      <>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginBottom: 10,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              width: 120,
              marginRight: 20,
            }}
          >
            {renderDot("#006DFF")}
            <Text style={{ color: "#232B5D" }}>Excellent: 47%</Text>
          </View>
          <View
            style={{ flexDirection: "row", alignItems: "center", width: 120 }}
          >
            {renderDot("#8F80F3")}
            <Text style={{ color: "#232B5D" }}>Okay: 16%</Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              width: 120,
              marginRight: 20,
            }}
          >
            {renderDot("#3BE9DE")}
            <Text style={{ color: "#232B5D" }}>Good: 40%</Text>
          </View>
          <View
            style={{ flexDirection: "row", alignItems: "center", width: 120 }}
          >
            {renderDot("#FF7F97")}
            <Text style={{ color: "#232B5D" }}>Poor: 3%</Text>
          </View>
        </View>
      </>
    );
  };

  return (
    <View
      style={{
        marginBottom: 15,
      }}
    >
      <View
        style={{
          padding: 16,
          borderRadius: 20,
          backgroundColor: "white",
          shadowOffset: {
            width: 0,
            height: 0,
          },
          shadowColor: "#bdbdbd",
          shadowOpacity: 0.6,
          shadowRadius: 25,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: "600",
            textTransform: "uppercase",
          }}
        >
          Performance
        </Text>
        <View style={{ padding: 20, alignItems: "center" }}>
          <PieChart
            data={data}
            donut
            showGradient
            focusOnPress  
            shadow 
            sectionAutoFocus
            radius={90}
            innerRadius={60}
            innerCircleColor={"#232B5D"}
            centerLabelComponent={() => {
              return (
                <View
                  style={{ justifyContent: "center", alignItems: "center" }}
                >
                  <Text
                    style={{ fontSize: 22, color: "white", fontWeight: "bold" }}
                  >
                    47%
                  </Text>
                  <Text style={{ fontSize: 14, color: "white" }}>
                    Excellent
                  </Text>
                </View>
              );
            }}
          />
        </View>
        <LegenedComponent />
      </View>
    </View>
  );
}
