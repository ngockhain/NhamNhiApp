import { ScrollView } from 'native-base';
import { StyleSheet, Text, View } from 'react-native';
import { Dimensions } from "react-native";
import {
  VictoryChart, VictoryBar,
  VictoryTheme, VictoryLegend,
  VictoryPie, VictoryStack,
  VictoryAxis
} from 'victory-native';

export default function CustomStackBarChart() {

  const data = [
    [
      { x: "Tuần 1", y: 2 }, { x: "Tuần 2", y: 3 },
      { x: "Tuần 3", y: 2 }, { x: "Tuần 4", y: 3 },
    ],
  ];

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
        <VictoryStack
          colorScale={["tomato", "orange", "gold"]}
          animate={{
            duration: 100,
            onLoad: { duration: 100 }
          }}
        >
          {(data.map((item, idx) => (
            <VictoryBar key={idx} data={item} />
          )))}
        </VictoryStack>
      </VictoryChart>
    </ScrollView>
  );
}
