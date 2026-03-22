export type Category = {
  id: string;
  slug: string;
  name: string;
  description: string;
  audience: string;
  articleCount: number;
  accent: string;
};

export type ArticleSection = {
  title: string;
  content: string;
};

export type Article = {
  slug: string;
  title: string;
  summary: string;
  categorySlug: string;
  premium: boolean;
  readTime: string;
  publishedAt: string;
  author: string;
  heroStat: string;
  bookmarkCount: number;
  tags: string[];
  insightPoints: string[];
  bodySections: ArticleSection[];
};

export type SubscriptionPlan = {
  id: string;
  name: string;
  price: string;
  description: string;
  cta: string;
  featured: boolean;
  benefits: string[];
};
