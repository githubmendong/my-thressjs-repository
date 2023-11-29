import React from 'react';
import { VictoryChart, VictoryLine, VictoryAxis, VictoryTheme, VictoryLegend  } from "victory";

export default function () {
    const data1 = [
        { x: 1, y: 2 },
        { x: 2, y: 3 },
        { x: 3, y: 5 },
        { x: 4, y: 4 },
        { x: 5, y: 7 },
      ];
    
    const data2 = [
        { x: 1, y: 3 },
        { x: 2, y: 4 },
        { x: 3, y: 2 },
        { x: 4, y: 5 },
        { x: 5, y: 6 },
      ];
    
    return (
        <>
            <h2>victory line chart</h2>
            <VictoryChart theme={VictoryTheme.material} width={400} height={300}>
                <VictoryAxis />
                <VictoryAxis dependentAxis />

                <VictoryLine 
                    data={data1} 
                    x="x" 
                    y="y" 
                    style={{
                    data: { stroke: "#c43a31" },
                    parent: { border: "1px solid #ccc" }
                    }}
                />

                <VictoryLine 
                    data={data2} 
                    x="x" 
                    y="y" 
                    style={{
                    data: { stroke: "#3c7a89" },
                    parent: { border: "1px solid #ccc" }
                    }}
                />

                {/* 범례 */}
                <VictoryLegend 
                    x={20}
                    y={10}
                    orientation="horizontal"
                    gutter={20}
                    style={{ border: { stroke: "black" }, title: { fontSize: 20 } }}
                    data={[
                    { name: "Data 1", symbol: { fill: "#c43a31" } },
                    { name: "Data 2", symbol: { fill: "#3c7a89" } },
                    ]}
                />

            </VictoryChart>
        </>
    );
}