import { defineConfig } from 'dumi';

const repo = 'echarts-demo';

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? `/${repo}/` : '/',
  publicPath: process.env.NODE_ENV === 'production' ? `/${repo}/` : '/',
  outputPath: 'docs-dist',
  theme: {
    '@c-primary': 'royalblue',
    'primary-color': 'royalblue',
  },
  styles: [
    `
      .dumi-default-previewer-demo {
        overflow: auto;
      }
      .dumi-default-sidebar {
        width: 240px !important;
      }
      .dumi-default-header-left {
        width: 220px !important;
      }
      .dumi-default-content {
        padding: 30px 30px 0 !important;
      }
      .dumi-default-hero-title {
        font-size: 50px !important;
      }
    `,
  ],
  themeConfig: {
    name: 'echarts-demo',
    socialLinks: {
      github: 'https://github.com',
    },
    nav: [
      { title: '📈 折线图', link: '/line/basic-line-chart' },
      { title: '📊 柱状图', link: '/bar/bar-with-background' },
      { title: '🍪 饼图', link: '/pie/referer-of-a-website' },
      { title: '⭐️ 散点图', link: '/scatter/basic-scatter-chart' },
      { title: '🌏 地理坐标/地图', link: '/' },
    ],
    sidebar: {
      '/line': [
        {
          title: '📈 折线图',
          children: addOrder([
            { title: '基础折线图', link: '/line/basic-line-chart' },
            { title: '基础平滑折线图', link: '/line/smoothed-line-chart' },
            { title: '基础面积图', link: '/line/basic-area-chart' },
            { title: '折线图堆叠', link: '/line/stacked-line-chart' },
            { title: '堆叠面积图', link: '/line/stacked-area-chart' },
            {
              title: '渐变堆叠面积图',
              link: '/line/gradient-stacked-area-chart',
            },
            { title: '凹凸图', link: '/line/bump-chart-ranking' },
            {
              title: '未来一周气温变化',
              link: '/line/temperature-change-in-the-coming-week',
            },
            { title: '折线图区域高亮', link: '/line/area-pieces' },
            { title: '数据过滤', link: '/line/data-transform-filter' },
            { title: '线图的渐变', link: '/line/line-gradient' },
            {
              title: '一天用电量分布',
              link: '/line/distribution-of-electricity',
            },
            { title: '大数据量面积图', link: '/line/large-scale-area-chart' },
            { title: 'Confidence Band', link: '/line/confidence-band' },
            {
              title: '雨量Evaporation关系图',
              link: '/line/rainfall-vs-evaporation',
            },
            { title: '北京 AQI 可视化', link: '/line/beijing-aqi' },
            { title: '多 X 轴', link: '/line/multiple-x-axes' },
            { title: '雨量流量关系图', link: '/line/rainfall' },
            { title: '时间轴折线图', link: '/line/area-chart-with-time-axis' },
            {
              title: '动态数据 + 时间坐标轴',
              link: '/line/dynamic-data-time-axis',
            },
            { title: '函数绘图', link: '/line/function-plot' },
            { title: '动态排序折线图', link: '/line/line-race' },
            { title: '折线图的标记线', link: '/line/line-with-marklines' },
            {
              title: '自定义折线图样式',
              link: '/line/line-style-and-item-style',
            },
          ]),
        },
      ],
      '/bar': [
        {
          title: '📊 柱状图',
          children: addOrder([
            { title: '带背景色的柱状图', link: '/bar/bar-with-background' },
            { title: '基础柱状图', link: '/bar/basic-bar' },
            {
              title: '坐标轴刻度与标签对齐',
              link: '/bar/axis-align-with-tick',
            },
            {
              title: '自定义单个柱子颜色',
              link: '/bar/set-style-of-single-bar',
            },
            { title: '瀑布图（柱状图模拟）', link: '/bar/waterfall-chart' },
            {
              title: '交错正负轴标签',
              link: '/bar/bar-chart-with-negative-value',
            },
            {
              title: '极坐标柱状图标签',
              link: '/bar/radial-polar-bar-label-position',
            },
            {
              title: '极坐标柱状图标签',
              link: '/bar/tangential-polar-bar-label-position',
            },
            {
              title: '世界人口总量 - 条形图',
              link: '/bar/world-population',
            },
            {
              title: '特性示例：渐变色 阴影 点击缩放',
              link: '/bar/clickable-column-chart-with-gradient',
            },
            {
              title: '柱状图标签旋转',
              link: '/bar/bar-label-rotation',
            },
            {
              title: '堆叠柱状图',
              link: '/bar/stacked-column-chart',
            },
            {
              title: '阶梯瀑布图（柱状图模拟）',
              link: '/bar/waterfall-chart-2',
            },
            {
              title: '堆叠条形图',
              link: '/bar/stacked-horizontal-bar',
            },
            {
              title: '柱状图框选',
              link: '/bar/brush-select-on-column-chart',
            },
            {
              title: '正负条形图',
              link: '/bar/bar-chart-with-negative-value-2',
            },
          ]),
        },
      ],
    },
  },
});

function addOrder(list: { title: string; link: string }[]) {
  return list.map((i, index) => ({
    ...i,
    order: index + 1,
  }));
}
