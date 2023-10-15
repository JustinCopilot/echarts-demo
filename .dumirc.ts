import { defineConfig } from 'dumi';

const repo = 'echarts-demo';

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? `/${repo}/` : '/',
  publicPath: process.env.NODE_ENV === 'production' ? `/${repo}/` : '/',
  outputPath: 'docs-dist',
  theme: {
    '@c-primary': 'aqua',
    'primary-color': 'aqua',
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
    nav: [
      { title: '📈 折线图', link: '/line/basic-line-chart' },
      { title: '📊 柱状图', link: '/bar/bar-with-background' },
      { title: '🍪 饼图', link: '/pie/referer-of-a-website' },
      { title: '⭐️ 散点图', link: '/scatter/basic-scatter-chart' },
      { title: '🌏 地理坐标/地图', link: '/' },
    ],
    socialLinks: {
      github: 'https://github.com',
    },
  },
});
