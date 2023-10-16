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
        data: [150, 230, 224, 218, 135, 147, 260],
        type: 'line'
      }
    ]
  };

  return <BasicChart option={option} />;
};
```
