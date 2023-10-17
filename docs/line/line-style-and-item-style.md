# 基础折线图

```jsx
import React from 'react';
import BasicChart from 'echarts-demos/BasicChart';
import type { EChartsOption } from 'echarts';

export default () => {
  const option: EChartsOption = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'line',
        symbol: 'triangle',
        symbolSize: 20,
        lineStyle: {
          color: '#5470C6',
          width: 4,
          type: 'dashed'
        },
        itemStyle: {
          borderWidth: 3,
          borderColor: '#EE6666',
          color: 'yellow'
        }
      }
    ]
  };

  return <BasicChart option={option} />;
};
```
