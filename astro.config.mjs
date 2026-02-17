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

      // ================================================
      // 🚀 5. 侧边栏核心逻辑 (已修复结构)
      // ================================================
      sidebar: [
        // --- 第一层：lite 指挥中心 (Dashboard 入口) ---
        {
          label: 'Lite 权益区',
          link: '/lite',
          badge: { text: '总览', variant: 'tip' },
        },
        // --- 第二层：lite 知识库 (展开的干货区) ---
        {
          label: '基础资产库',
          collapsed: false, // 默认展开
          items: [
            {
              label: '下载资源',
              collapsed: true,
              autogenerate: { directory: 'lite/xiazai' },
            },
          ],
        },

        // --- 第一层：Pro 指挥中心 (Dashboard 入口) ---
        {
          label: 'Pro 权益区',
          link: '/pro',
          badge: { text: '总览', variant: 'tip' },
        },

        // --- 第二层：Pro 知识库 (展开的干货区) ---
        {
          label: 'Stable Diffusion',
          collapsed: false, // 默认展开
          items: [
            {
              label: '介绍',
              collapsed: true,
              autogenerate: { directory: 'pro/anzhuang' },
            },
            {
              label: '实战教程',
              collapsed: true,
              autogenerate: { directory: 'pro/jiaocheng' },
            },
            {
              label: '核心原理',
              collapsed: true,
              autogenerate: { directory: 'pro/yuanli' },
            },
          ],
        },
      ],
      // 👆 sidebar 数组在这里结束

      // ================================================
      // 社交链接 (放在这里才是正确的，在 starlight 配置对象内部)
      // ================================================
      // social: [
      //   {x
      //     label: 'GitHub',
      //     href: 'https://github.com/Miaot993/aippt-website',
      //     icon: 'github',
      //   },
      // ],

    }), // 👈 starlight 函数在这里结束
  ], // 👈 integrations 数组在这里结束
}); // 👈 defineConfig 在这里结束