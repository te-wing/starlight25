// 1. `astro:content`からユーティリティをインポート
import { z, defineCollection } from 'astro:content';

// 2. コレクションを定義
const bookCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    authorInitial: z.string(),
    kind: z.string(),
    bookVer: z.string(),
    pageNo: z.number(),
    pageId: z.number(),
  }),
});

// 3. コレクションを登録するために、単一の`collections`オブジェクトをエクスポート
//    このキーは、"src/content"のコレクションのディレクトリ名と一致する必要があります。
export const collections = {
  'book': bookCollection,
};