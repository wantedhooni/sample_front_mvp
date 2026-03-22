import Link from "next/link";
import { BlogService } from "@/services/blog-service";

const blogService = new BlogService();

export default async function BlogPage() {
  const posts = await blogService.getPosts();

  return (
    <main className="min-h-screen bg-[var(--color-ink)] text-[var(--color-paper)]">
      <div className="mx-auto max-w-5xl px-6 py-16 lg:px-10">
        <Link href="/" className="font-mono text-xs uppercase tracking-[0.28em] text-[var(--color-accent)]">
          Back to LeadForge
        </Link>
        <h1 className="mt-6 text-4xl font-semibold tracking-[-0.05em] text-white md:text-6xl">
          Lead generation blog
        </h1>
        <p className="mt-5 max-w-2xl text-sm leading-7 text-white/62 md:text-base">
          브랜드 홈페이지, 가격 페이지, 문의 폼, 전환 퍼널 설계를 실무 시각으로 정리한 운영형
          콘텐츠 모음입니다.
        </p>

        <div className="mt-14 space-y-10">
          {posts.map((post) => (
            <article key={post.slug} className="border-t border-white/12 pt-8">
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-white/45">
                {post.category} · {post.publishedAt} · {post.readTime}
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white">
                {post.title}
              </h2>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-white/62 md:text-base">
                {post.excerpt}
              </p>
              <Link
                href={`/blog/${post.slug}`}
                className="mt-5 inline-flex text-sm font-semibold text-[var(--color-accent)]"
              >
                글 읽기
              </Link>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
