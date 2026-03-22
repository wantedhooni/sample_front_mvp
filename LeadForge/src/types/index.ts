export type HighlightItem = {
  label: string;
  value: string;
  description: string;
};

export type FeatureItem = {
  title: string;
  description: string;
};

export type ValuePoint = {
  kicker: string;
  title: string;
  description: string;
};

export type ProcessStep = {
  step: string;
  title: string;
  description: string;
};

export type PlanItem = {
  badge: string;
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
};

export type BlogSection = {
  heading: string;
  body: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  publishedAt: string;
  readTime: string;
  featured?: boolean;
  sections: BlogSection[];
};

export type LeadPayload = {
  name: string;
  company: string;
  email: string;
  monthlyLeads: string;
  message: string;
};

export type LeadRecord = LeadPayload & {
  id: string;
  createdAt: string;
};
