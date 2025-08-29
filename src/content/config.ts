import { defineCollection, z } from 'astro:content';

const yyyyCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    publishDate: z.date(),
  }),
});

export const collections = {
  'yyyy': yyyyCollection,
};