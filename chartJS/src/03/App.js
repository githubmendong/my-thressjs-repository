import React from 'react';
import { ResponsiveHeatMap } from '@nivo/heatmap';
import data from '../assets/json/data';

export default function () {
    

      return (
        <>
          <h2>nivo heatmap</h2>
          <div style={{ width: '800px', height: '400px' }}>
            <ResponsiveHeatMap
              data={data}
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
                minValue: 1000,
                maxValue: 0
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