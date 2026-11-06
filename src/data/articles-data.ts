// Все статьи Metatron.ad — объединение трёх частей (10 статей × 4 языка)
import type { Article } from "./types";
import { articlesPart1 } from "./articles-1";
import { articlesPart2 } from "./articles-2";
import { articlesPart3 } from "./articles-3";

export const articles: Article[] = [
  ...articlesPart1,
  ...articlesPart2,
  ...articlesPart3,
];
