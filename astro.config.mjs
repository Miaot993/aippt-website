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
        // 👇 加这一行，让系统用我们的拦截器替换默认渲染器
        MarkdownContent: './src/components/CustomMarkdownContent.astro',
      },

      

  
    }), // 👈 starlight 函数在这里结束
  ], // 👈 integrations 数组在这里结束
}); // 👈 defineConfig 在这里结束