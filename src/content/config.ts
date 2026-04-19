import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    pubDate: z.coerce.date().optional(),
    topic: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
