import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Dimensions } from "react-native";

import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
} from "react-native-chart-kit";

export default function CustomStackBarChart() {

    const chartConfig = {
        // backgroundGradientFrom: "#1E2923",
        // backgroundGradientFromOpacity: 1,
        // backgroundGradientTo: "#08130D",
        // backgroundGradientToOpacity: 0.5,
        color: (opacity = 1) => `rgba(255, 131, 51, ${opacity})`,
        backgroundColor: "#000",
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false // optional
    };

    const screenWidth = Dimensions.get("window").width;

    const data = {
        labels: ["2022年01月", "2022年02月"],
        legend: ["L1", "L2", "L3"],
        data: [
            [60, 60, 60],
            [30, 30, 60]
        ],
        barColors: ["orange", "blue", "lightgreen"]
    };

    const graphStyle = {
        marginVertical: 8,
        borderRadius: 16
    };

    return (
        <View>
            <StackedBarChart
                style={graphStyle}
                data={data}
                width={screenWidth}
                height={220}
                chartConfig={chartConfig}
            />
        </View>
    );
}

const styles = StyleSheet.create({

});
