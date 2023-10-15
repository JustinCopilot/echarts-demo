import type echarts_1 from 'echarts';
import {
  BarChart,
  LineChart,
  MapChart,
  PieChart,
  ScatterChart,
} from 'echarts/charts';
import {
  DatasetComponent,
  GridComponent,
  LegendComponent,
  MarkAreaComponent,
  MarkLineComponent,
  MarkPointComponent,
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  TransformComponent,
  VisualMapComponent,
} from 'echarts/components';
import * as echarts from 'echarts/core';
import { UniversalTransition } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';
import React, { useEffect, useRef } from 'react';

echarts.use([
  DatasetComponent,
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  GridComponent,
  TransformComponent,
  VisualMapComponent,
  MarkAreaComponent,
  LegendComponent,
  MarkLineComponent,
  MarkPointComponent,
  LineChart,
  BarChart,
  PieChart,
  ScatterChart,
  MapChart,
  CanvasRenderer,
  UniversalTransition,
]);

// export type EChartsOption = echarts.ComposeOption<GridComponentOption | BarSeriesOption>;

interface BasicChartProps {
  option: echarts_1.EChartsOption;
}

const BasicChart: React.FC<BasicChartProps> = ({ option }) => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const chart = echarts.init(chartRef.current!);

    chart.setOption(option);

    return () => {
      chart.dispose();
    };
  }, []);

  return <div ref={chartRef} style={{ width: '100%', height: '400px' }} />;
};

export default BasicChart;
