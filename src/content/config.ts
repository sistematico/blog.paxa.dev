import { defineCollection, z } from 'astro:content'

const blog = defineCollection({
  type: 'content',
  schema: z.object({ // Type-check frontmatter using a schema
    title: z.string(),
    description: z.string(),
    created: z.coerce.date(), // Transform string to Date object
    updated: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    published: z.boolean().optional()
  })
})

export const collections = { blog }
