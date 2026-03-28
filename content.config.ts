import { defineCollection, defineContentConfig, z } from '@nuxt/content'

const blogPostSchema = z.object({
  title: z.string().optional(),
  description: z.string().optional(),
  date: z.string().regex(/^\d{2}\/\d{2}\/\d{4}$/).optional(),
  photo: z.string().optional(),
  img: z.string().optional(),
  video: z.string().optional(),
}).partial()

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      type: 'page',
      source: 'blog/*.md',
      schema: blogPostSchema,
    }),
  },
})
