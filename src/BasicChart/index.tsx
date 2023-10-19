import type echarts_1 from 'echarts';
import {
  BarChart,
  LineChart,
  MapChart,
  PieChart,
  ScatterChart,
} from 'echarts/charts';
import {
  BrushComponent,
  DataZoomComponent,
  DatasetComponent,
  GridComponent,
  LegendComponent,
  MarkAreaComponent,
  MarkLineComponent,
  MarkPointComponent,
  PolarComponent,
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
  DataZoomComponent,
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
  PolarComponent,
  BrushComponent,
]);

// export type EChartsOption = echarts.ComposeOption<GridComponentOption | BarSeriesOption>;

interface BasicChartProps {
  option: echarts_1.EChartsOption;
  setChartInstance: (instance: echarts.ECharts) => void;
}

const BasicChart: React.FC<BasicChartProps> = ({
  option,
  setChartInstance = () => ({}),
}) => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const chart = echarts.init(chartRef.current!);
    chart.setOption(option);

    setChartInstance(chart);

    return () => {
      chart.dispose();
    };
  }, []);

  return <div ref={chartRef} style={{ width: '100%', height: '400px' }} />;
};

export default BasicChart;
