import { unified } from 'unified';
import remarkParse from 'remark-parse';
import { toString } from 'mdast-util-to-string';

interface ContentEntry {
  id: string;
  slug: string;
  body: string;
}

export function generateDescription(
  entry: ContentEntry,
  maxLength: number = 100
): string {
  const cleaned = entry.body
    .split('\n')
    .filter(line => !/^\s*(import|export)\s/.test(line))
    .join('\n');

  const tree = unified()
    .use(remarkParse)
    .parse(cleaned);

  const text = toString(tree).replace(/\s+/g, ' ').trim();

  const short = text.slice(0, maxLength).trim();
  return text.length > maxLength ? `${short}...` : short;
}