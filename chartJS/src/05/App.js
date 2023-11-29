import React, { useState, useEffect } from 'react';
import { ResponsiveHeatMap } from '@nivo/heatmap';
import data from '../assets/json/excel_data';

export default function () {
    // real_fm_data 추출
    // const real_fm_data = data.real_fm_data;
    // console.log(real_fm_data);

    // const transformedData = real_fm_data.map(item => ({
    //   id: item.seqno,
    //   data: Object.entries(item)
    //     .filter(([key]) => key.includes('fm') && !key.includes('avg'))
    //     .map(([key, value]) => ({
    //       x: key,
    //       y: value
    //     }))
    // }));

    const [transformedData, setTransformedData] = useState([]);

    useEffect(() => {
        const processData = () => {
            const numberOfGroups = 80;
            const rowsPerGroup = data.real_fm_data.length / numberOfGroups;

            const groupedAverages = [];
            for (let i = 0; i < numberOfGroups; i++) {
                const startIndex = i * rowsPerGroup;
                const endIndex = (i + 1) * rowsPerGroup;

                const group = data.real_fm_data.slice(startIndex, endIndex);
                const groupAverage = calculateGroupAverage(group);

                groupedAverages.push({ id: i, ...groupAverage });
            }

            console.log(groupedAverages);
            const processedData = groupedAverages.map((item, id) => ({
                id: id,
                data: Object.entries(item)
                    .filter(([key]) => key.includes('fm'))
                    .map(([key, value]) => ({
                        x: key,
                        y: value
                    }))
            }));


            setTransformedData(processedData);

        };

        const calculateGroupAverage = (group) => {
            const averages = {};

            const keys = Object.keys(group[0]).filter(key => key.includes('fm')&& !key.includes('avg'));

            keys.forEach(key => {
                const values = group.map(item => item[key]);
                const average = values.reduce((acc, val) => acc + val, 0) / values.length;

                averages[key] = average;
            });

            return averages;
        };

        processData();
    }, []);

    // console.log(transformedData);

    return (
        <>
            <h2>nivo heatmap</h2>
            <div style={{ width: '800px', height: '400px' }}>
                <ResponsiveHeatMap
                    data={transformedData}
                    margin={{ top: 20, right: 90, bottom: 60, left: 50 }}
                    axisTop={{
                        tickValues: [],
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: -90,
                        legend: '',
                        legendOffset: 46
                    }}
                    axisLeft={{
                        tickValues: [],
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 0,
                        legend: '',
                        legendPosition: 'middle',
                        legendOffset: -72
                    }}
                    colors={{
                        type: 'diverging',
                        scheme: 'yellow_orange_red',
                        divergeAt: 0.5,
                        minValue: 900,
                        maxValue: 300
                    }}
                    enableLabels={false}
                    hoverTarget="cell"
                    animate={false}
                    inactiveOpacity={1}
                    legends={[
                        {
                            anchor: 'bottom',
                            translateX: 0,
                            translateY: 30,
                            length: 400,
                            thickness: 8,
                            direction: 'row',
                            tickPosition: 'after',
                            tickSize: 3,
                            tickSpacing: 4,
                            tickOverlap: false,
                            titleAlign: 'start',
                            titleOffset: 4
                        }
                    ]}
                />
            </div>
        </>
    );
}