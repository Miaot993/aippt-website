// =================================================================
// 配置文件：astro.config.mjs
// 这是你网站的“大脑”，控制着网站如何构建、长什么样。
// =================================================================

import { defineConfig } from 'astro/config';
// 引入 Tailwind v4 的 Vite 插件（最新版写法）
import tailwindcss from '@tailwindcss/vite';
// 引入 Starlight 文档主题集成
import starlight from '@astrojs/starlight';

export default defineConfig({
  // 1. Vite 构建配置
  // 因为使用了 Tailwind v4，它现在是作为一个 Vite 插件运行的，而不是 Astro 集成。
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    starlight({
      title: 'AI&PPT 第二大脑',

      // 2. Logo 配置
      logo: {
        src: './src/assets/logo.svg',
        replacesTitle: false,
      },

      // 3. 样式注入
      customCss: [
        './src/styles/global.css',
      ],

      // 4. 组件覆盖
      components: {
        ThemeSelect: './src/components/ThemeToggle.astro',
        Head: './src/components/Head.astro',
      },

      // 兜底配置
      head: [],

      // astro.config.mjs 的 sidebar 部分

      sidebar: [
        // 1. Lite 区域：自动读取 src/content/docs/lite 下的所有文件夹
        {
          label: 'Lite 权益区',
          autogenerate: { directory: 'lite' }, 
        },

        // 1. 👑 核心置顶：Pro Overview (对应图2的 Overview)
        // 注意：你需要把这个页面的实际路径填在这里
        {
          label: 'Pro Overview',
          link: '/pro', // 👈 这里填你那个核心页面的 slug/路径
        },

        // 2. 🔍 次级置顶：全站资源索引
        {
          label: '全站资源索引',
          link: '/pro/all', // 👈 这里填你索引页面的 slug/路径
        },

        // 2. Pro 区域：自动读取 src/content/docs/pro 下的所有文件夹
        {
          label: 'Pro 权益区',
          autogenerate: { directory: 'pro' },
        },
      ], // 👆 sidebar 数组在这里结束
    }), // 👈 starlight 函数在这里结束
  ], // 👈 integrations 数组在这里结束
}); // 👈 defineConfig 在这里结束