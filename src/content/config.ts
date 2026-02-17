// src/content/config.ts
import { defineCollection, z } from 'astro:content';
import { docsSchema } from '@astrojs/starlight/schema';

export const collections = {
  docs: defineCollection({
    schema: docsSchema({
      // ⚠️ 修正点：不要在这里写 (z)，要解构出 ({ image })
      // 这样内部的 z.date() 就会使用上面 import 的 z，而不是这里的参数
      extend: ({ image }) => z.object({
        // 1. 日期字段 (可选)
        date: z.date().optional(),

        // 2. 封面图字段 (可选)
        // 这里的 image() 来自参数解构，专门用于处理图片路径
        cover: image().optional(),

        // 3. 标签字段 (可选)
        tags: z.array(z.string()).optional(),
        
        // 4. 是否推荐 (可选)
        featured: z.boolean().default(false),
      }),
    }),
  }),
};