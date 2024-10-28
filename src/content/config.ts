import { z, defineCollection } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional().nullable(),
    date: z.date(),
    tags: z.array(z.string()).or(z.string()).optional().nullable(),
    category: z.array(z.string()).or(z.string()).default('uncategorized').nullable(),
    sticky: z.number().default(0).nullable(),
    mathjax: z.boolean().default(false).nullable(),
    mermaid: z.boolean().default(false).nullable(),
    draft: z.boolean().default(false).nullable(),
    toc: z.boolean().default(true).nullable(),
    donate: z.boolean().default(true).nullable(),
    comment: z.boolean().default(true).nullable(),
  })
});

const snippets = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      image: image().optional(),
    })
});

export const collections = { posts, snippets };