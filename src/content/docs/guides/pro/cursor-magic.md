---
title: "Cursor + Claude: 重新定义编程 (Pro)"
description: 揭秘如何利用 Cursor 编辑器配合 Claude 3.5 Sonnet 实现全自动代码构建。
sidebar:
  label: Cursor 魔法
  order: 1
  badge:
    text: Pro Only
    variant: tip
---

import { Steps, Tabs, TabItem } from '@astrojs/starlight/components';

:::tip[高阶思维]
Pro 用户请注意：不要把 AI 当作搜索引擎，要把它当作**实习生**。你不需要写代码，你只需要**Review 代码**。
:::

## 什么是 "Cursor Magic"？

这是我自己命名的一套工作流，核心逻辑是利用 Cursor 的 `Composer` 功能，将设计稿直接转化为前端代码。

### 核心优势对比

| 传统开发 | Cursor Magic 工作流 | 效率提升 |
| :--- | :--- | :--- |
| 手写 HTML/CSS | 截图 -> 代码 | 🚀 10x |
| 手动调试 Bug | AI 自动修复 | 🚀 5x |
| 查文档 | AI 读取本地文档 | 🚀 3x |

## 🚀 实战操作 SOP

<Steps>

1.  **环境准备**
    下载 [Cursor](https://cursor.sh/)，并订阅 Pro 版（或是使用自己的 API Key）。

2.  **开启 Composer 模式**
    按下快捷键 `Cmd + I` (Mac) 或 `Ctrl + I` (Win)。这是一个全局悬浮窗，可以跨文件修改代码。

3.  **投喂上下文**
    这是最关键的一步。不要直接问。
    * 输入 `@` 符号。
    * 选择 `Codebase` (全库索引)。
    * 或者选择 `Docs` -> 添加 `Starlight` 文档。

4.  **下达指令 (Prompt)**
    复制以下高权重提示词：

    ```text
    作为资深前端架构师，请基于 @global.css 的设计规范，
    帮我重构当前页面的 Hero Section。
    要求：使用 Tailwind CSS，保持深色模式兼容，增加微交互动画。
    ```

5.  **一键应用**
    点击 `Apply`，看着代码像黑客帝国一样自动生成。

</Steps>

## 💎 Pro 专属资源

<Tabs>
  <TabItem label="Prompt 模板">
    **架构师角色设定：**
    > You are an expert in Astro, TailwindCSS and TypeScript. You focus on clean code, performance, and accessibility.
  </TabItem>
  <TabItem label="推荐配置">
    在 VS Code 设置中开启 `Cursor: Predictions`，让 AI 预判你的下一个动作。
  </TabItem>
</Tabs>

:::caution[版权警告]
本教程内容仅限 Pro 会员个人使用，严禁外传。
:::