// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import starlight from '@astrojs/starlight';

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    starlight({
      title: 'AI&PPT 第二大脑',
      // 2. 引入刚才创建的 Logo 图片
      logo: {
        src: './src/assets/logo.svg',
        replacesTitle: false, // false = 显示图标+文字；true = 只显示图标
      },

      // 防止 undefined 报错的兜底
      head: [],

      // ✅ 核心修复：在这里注入 Tailwind 的样式文件
      // 这样文档页里的 ThemeToggle 组件才能读懂 hidden/block/dark 等类名
      customCss: [
        './src/styles/global.css',
      ],

      // 社交链接
      // social: [
      //   {
      //     label: 'GitHub',
      //     href: 'https://github.com/Miaot993/aippt-website',
      //     icon: 'github',
      //   },
      // ],

      // ✅ 新增的核心配置：覆盖默认的主题选择器
      // 这会把 Starlight 右上角的下拉框替换成我们刚才写的图标按钮
      components: {
        ThemeSelect: './src/components/ThemeToggle.astro',
        // ✅ 新增这一行：接管 Head 区域
        Head: './src/components/Head.astro',
      },

      // 侧边栏菜单 (保留你之前的配置)
      sidebar: [
        {
          label: '🌟 Lite 权益区',
          // 自动抓取 lite 文件夹下的所有内容
          autogenerate: { directory: 'lite' },
        },
        {
          label: '💎 Pro 核心资产',
          // 自动抓取 pro 文件夹下的所有内容
          autogenerate: { directory: 'pro' },
        },
        // 之前的通用教程可以保留，或者归类到上面两个里面
        {
          label: '📚 公共教程库',
          autogenerate: { directory: 'guides/basics' },
        },
      ],
    }),
  ],
});