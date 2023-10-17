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
          children: [
            { title: '基础折线图', link: '/line/basic-line-chart', order: 1 },
            {
              title: '基础平滑折线图',
              link: '/line/smoothed-line-chart',
              order: 2,
            },
            { title: '基础面积图', link: '/line/basic-area-chart', order: 3 },
            { title: '折线图堆叠', link: '/line/stacked-line-chart', order: 4 },
            { title: '堆叠面积图', link: '/line/stacked-area-chart', order: 5 },
            {
              title: '渐变堆叠面积图',
              link: '/line/gradient-stacked-area-chart',
              order: 6,
            },
            { title: '凹凸图', link: '/line/bump-chart-ranking', order: 7 },
            {
              title: '未来一周气温变化',
              link: '/line/temperature-change-in-the-coming-week',
              order: 8,
            },
            { title: '折线图区域高亮', link: '/line/area-pieces', order: 9 },
            {
              title: '数据过滤',
              link: '/line/data-transform-filter',
              order: 10,
            },
            { title: '线图的渐变', link: '/line/line-gradient', order: 11 },
            {
              title: '一天用电量分布',
              link: '/line/distribution-of-electricity',
              order: 12,
            },
            {
              title: '大数据量面积图',
              link: '/line/large-scale-area-chart',
              order: 13,
            },
            {
              title: 'Confidence Band',
              link: '/line/confidence-band',
              order: 14,
            },
            {
              title: '雨量Evaporation关系图',
              link: '/line/rainfall-vs-evaporation',
              order: 15,
            },
            { title: '北京 AQI 可视化', link: '/line/beijing-aqi', order: 16 },
            { title: '多 X 轴', link: '/line/multiple-x-axes', order: 17 },
            { title: '雨量流量关系图', link: '/line/rainfall', order: 18 },
            {
              title: '时间轴折线图',
              link: '/line/area-chart-with-time-axis',
              order: 19,
            },
            {
              title: '动态数据 + 时间坐标轴',
              link: '/line/dynamic-data-time-axis',
              order: 20,
            },
            {
              title: '函数绘图',
              link: '/line/function-plot',
              order: 21,
            },
            {
              title: '动态排序折线图',
              link: '/line/line-race',
              order: 22,
            },
            {
              title: '折线图的标记线',
              link: '/line/line-with-marklines',
              order: 23,
            },
            {
              title: '自定义折线图样式',
              link: '/line/line-style-and-item-style',
              order: 24,
            },
          ],
        },
      ],
      '/bar': [
        {
          title: '📊 柱状图',
          children: [
            {
              title: '带背景色的柱状图',
              link: '/bar/bar-with-background',
              order: 1,
            },
            { title: '基础柱状图', link: '/bar/basic-bar', order: 2 },
            {
              title: '坐标轴刻度与标签对齐',
              link: '/bar/axis-align-with-tick',
              order: 3,
            },
            {
              title: '自定义单个柱子颜色',
              link: '/bar/set-style-of-single-bar',
              order: 4,
            },
            {
              title: '瀑布图（柱状图模拟）',
              link: '/bar/waterfall-chart',
              order: 5,
            },
            {
              title: '交错正负轴标签',
              link: '/bar/bar-chart-with-negative-value',
              order: 6,
            },
            {
              title: '极坐标柱状图标签',
              link: '/bar/radial-polar-bar-label-position',
              order: 7,
            },
            {
              title: '极坐标柱状图标签',
              link: '/bar/tangential-polar-bar-label-position',
              order: 8,
            },
          ],
        },
      ],
    },
  },
});
