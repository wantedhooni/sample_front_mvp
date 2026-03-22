import Link from "next/link";

import { Article, Category } from "@/types/content";

type ArticleCardProps = {
  article: Article;
  category: Category | undefined;
};

export function ArticleCard({ article, category }: ArticleCardProps) {
  return (
    <article className="group rounded-[32px] border border-black/10 bg-white/80 p-6 shadow-[0_20px_60px_rgba(58,40,24,0.08)] transition hover:-translate-y-1 hover:shadow-[0_30px_80px_rgba(58,40,24,0.12)]">
      <div className="flex items-center justify-between gap-4">
        <span className="rounded-full bg-[#f3e6d8] px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#7a5f4c]">
          {category?.name ?? "Insight"}
        </span>
        <span className="text-xs text-[#7b6d62]">
          {article.publishedAt} · {article.readTime}
        </span>
      </div>

      <div className="mt-5">
        <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-[#7b6d62]">
          <span>{article.author}</span>
          {article.premium ? (
            <span className="rounded-full border border-[#b66b4d]/20 bg-[#fff1e8] px-2 py-1 text-[#b66b4d]">
              Premium
            </span>
          ) : null}
        </div>
        <h3 className="mt-3 font-serif text-3xl leading-tight text-[#171717]">
          {article.title}
        </h3>
        <p className="mt-4 text-sm leading-7 text-[#5b4f46]">
          {article.summary}
        </p>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {article.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-black/10 px-3 py-1 text-xs text-[#6c6055]"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-8 flex items-center justify-between">
        <p className="text-sm text-[#7b6d62]">
          북마크 {article.bookmarkCount.toLocaleString()}
        </p>
        <Link
          href={`/articles/${article.slug}`}
          className="rounded-full bg-[#171717] px-4 py-2 text-sm font-semibold text-[#f5efe6] transition hover:bg-[#2b2b2b]"
        >
          Read insight
        </Link>
      </div>
    </article>
  );
}
