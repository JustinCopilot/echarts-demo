# 基础平滑折线图

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
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        smooth: true
      }
    ]
  };

  return <BasicChart option={option} />;
};
```
