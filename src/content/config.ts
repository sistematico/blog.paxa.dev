import { defineCollection, z } from 'astro:content'

const blog = defineCollection({
  type: 'content',
  schema: z.object({ // Type-check frontmatter using a schema
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()).optional(),
    pubDate: z.coerce.date().optional(), // Transform string to Date object
    created: z.coerce.date(), // Transform string to Date object
    updated: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    published: z.boolean().optional()
  })
})

const snippets = defineCollection({
  type: 'content',
  schema: z.object({ // Type-check frontmatter using a schema
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()).optional(),
    created: z.coerce.date(), // Transform string to Date object
    updated: z.coerce.date().optional(),
    draft: z.boolean().optional()
  })
})

export const collections = { blog, snippets }
