import Link from "next/link";

import { Category } from "@/types/content";

type CategorySpotlightProps = {
  category: Category;
};

export function CategorySpotlight({ category }: CategorySpotlightProps) {
  return (
    <Link
      href={`/categories#${category.slug}`}
      className={`block rounded-[30px] bg-gradient-to-br ${category.accent} p-[1px] transition hover:-translate-y-1`}
    >
      <div className="h-full rounded-[29px] bg-[rgba(17,17,17,0.9)] p-6 text-[#f8f1e7]">
        <p className="text-xs uppercase tracking-[0.3em] text-[#f2d6c2]">
          {category.audience}
        </p>
        <h3 className="mt-4 font-serif text-3xl">{category.name}</h3>
        <p className="mt-3 text-sm leading-7 text-[#d7c8bc]">
          {category.description}
        </p>
        <div className="mt-8 flex items-center justify-between text-sm">
          <span>{category.articleCount} articles</span>
          <span>Explore</span>
        </div>
      </div>
    </Link>
  );
}
