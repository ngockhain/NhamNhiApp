import { ScrollView } from 'native-base';
import { StyleSheet, Text, View } from 'react-native';
import { useState, useEffect } from 'react';
import { Dimensions } from "react-native";
import {
  VictoryChart, VictoryBar,
  VictoryTheme, VictoryLegend,
  VictoryPie, VictoryLabel,
  VictoryAxis
} from 'victory-native';

export default function CustomBarChart() {

  const [data, setData] = useState(
    [
      { x: 'Loại 1', y: 35, color: "red" },
      { x: 'Loại 2', y: 25, color: "blue" },
      { x: 'Loại 3', y: 60, color: "red" },
      { x: 'Loại 4', y: 50, color: "red" },
      { x: 'Loại 5', y: 35, color: "red" },
      { x: 'Loại 6', y: 50, color: "red" },
      { x: 'Loại 7', y: 25, color: "red" },
      { x: 'Loại 8', y: 60, color: "red" },
      { x: 'Loại 9', y: 50, color: "red" }
    ]
  );

  return (
    <ScrollView>
      <VictoryChart
        theme={VictoryTheme.material}
        domainPadding={{ x: 20 }}
      // domain={{ y: [0, 250] }}
      >
        <VictoryAxis dependentAxis />
        <VictoryAxis
          style={{
            tickLabels: { angle: 45, verticalAnchor: 'middle', textAnchor: 'start' }
          }}
        />
        <VictoryBar
          animate={{
            duration: 2000,
            onLoad: { duration: 1000 }
          }}
          labels={({ datum }) => `🐤: ${datum.y}k`}
          style={{
            data: {
              fill: ({ datum }) => datum.color,
              stroke: ({ index }) => "#000000",
              fillOpacity: 0.7,
              strokeWidth: 2
            },
            labels: {
              // fontSize: 15,
              fill: ({ datum }) => datum.x === 3 ? "#000000" : "#c43a31"
            }
          }}
          data={data}
        />
      </VictoryChart>
    </ScrollView>
  );
}
