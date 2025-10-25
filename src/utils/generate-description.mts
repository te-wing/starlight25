interface ContentEntry {
  id: string;
  slug: string;
  body: string;
}

export function generateDescription(entry: ContentEntry, maxLength: number = 100): string {
  const cleanedText = entry.body
    .replace(/^(#+\s.*|\*.*|\-.*|\[.*\]\(.*\))/gm, '')
    .replace(/\s+/g, ' ')
    .trim();

  let description = cleanedText.substring(0, maxLength);

  if (cleanedText.length > maxLength) {
    description = description.trim() + '...';
  }

  return description;
}