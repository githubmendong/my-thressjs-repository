import React from 'react';
import { ResponsiveHeatMap } from '@nivo/heatmap';

export default function () {
    
    const data = [
        { "country": "AD", "hot dog": 57, "burger": 96, "sandwich": 74, "kebab": 61, "fries": 9, "donut": 32 },
        { "country": "AE", "hot dog": 82, "burger": 48, "sandwich": 24, "kebab": 8, "fries": 35, "donut": 79 },
        { "country": "AF", "hot dog": 32, "burger": 25, "sandwich": 45, "kebab": 74, "fries": 45, "donut": 39 }
    ];

    return (
        <>
            <h2>nivo heatmap</h2>
            <div style={{ width: '600px', height: '400px' }}>
            <ResponsiveHeatMap
                data={data}
                keys={['hot dog', 'burger', 'sandwich', 'kebab', 'fries', 'donut']}
                indexBy="country"
                margin={{ top: 100, right: 60, bottom: 60, left: 60 }}
                forceSquare={true}
                colors="nivo"
                axisTop={{
                orient: 'top',
                tickSize: 5,
                tickPadding: 5,
                tickRotation: -90,
                legend: '',
                legendOffset: 36,
                }}
                axisLeft={{
                orient: 'left',
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: '',
                legendPosition: 'center',
                legendOffset: -40,
                }}
                cellOpacity={1}
                cellBorderColor={{ from: 'color', modifiers: [['darker', 0.4]] }}
                labelTextColor={{ from: 'color', modifiers: [['darker', 1.8]] }}
                defs={[
                {
                    id: 'lines',
                    type: 'patternLines',
                    background: 'inherit',
                    color: 'rgba(0, 0, 0, 0.1)',
                    rotation: -45,
                    lineWidth: 4,
                    spacing: 7,
                },
                ]}
                fill={[{ id: 'lines' }]}
                animate={true}
                motionStiffness={80}
                motionDamping={9}
            />
            </div>
        </>
    );
}