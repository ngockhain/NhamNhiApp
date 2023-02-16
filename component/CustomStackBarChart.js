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
      { x: "1", y: 2 }, { x: "2", y: 3 }, { x: "3", y: 5 },
      { x: "4", y: 2 }, { x: "5", y: 3 }, { x: "6", y: 5 },
      { x: "7", y: 2 }, { x: "8", y: 3 }, { x: "9", y: 5 },
      { x: "10", y: 2 }, { x: "11", y: 3 }, { x: "12", y: 5 },
      { x: "13", y: 2 }, { x: "14", y: 3 }, { x: "15", y: 5 },
      { x: "16", y: 2 }, { x: "17", y: 3 }, { x: "18", y: 5 },
      { x: "19", y: 2 }, { x: "20", y: 3 }, { x: "21", y: 5 },
      { x: "22", y: 2 }, { x: "23", y: 3 }, { x: "24", y: 5 },
      { x: "25", y: 2 }, { x: "26", y: 3 }, { x: "27", y: 5 },
      { x: "28", y: 2 }, { x: "29", y: 3 }, { x: "30", y: 5 }, { x: "31", y: 5 }
    ],
    [
      { x: "1", y: 2 }, { x: "2", y: 3 }, { x: "3", y: 5 },
      { x: "4", y: 2 }, { x: "5", y: 3 }, { x: "6", y: 5 },
      { x: "7", y: 2 }, { x: "8", y: 3 }, { x: "9", y: 5 },
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
