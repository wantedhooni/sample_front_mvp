import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BlogService } from "@/services/blog-service";

const blogService = new BlogService();

type BlogDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  const posts = await blogService.getPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await blogService.getPostBySlug(slug);

  if (!post) {
    return {};
  }

  return {
    title: `${post.title} | LeadForge`,
    description: post.excerpt,
  };
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  const post = await blogService.getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[var(--color-ink)] text-[var(--color-paper)]">
      <article className="mx-auto max-w-3xl px-6 py-16 lg:px-10">
        <Link href="/blog" className="font-mono text-xs uppercase tracking-[0.28em] text-[var(--color-accent)]">
          Back to Blog
        </Link>
        <p className="mt-8 font-mono text-xs uppercase tracking-[0.24em] text-white/45">
          {post.category} · {post.publishedAt} · {post.readTime}
        </p>
        <h1 className="mt-5 text-4xl font-semibold tracking-[-0.05em] text-white md:text-6xl">
          {post.title}
        </h1>
        <p className="mt-6 text-base leading-8 text-white/68">{post.excerpt}</p>

        <div className="mt-14 space-y-12">
          {post.sections.map((section) => (
            <section key={section.heading} className="border-t border-white/12 pt-8">
              <h2 className="text-2xl font-semibold tracking-[-0.04em] text-white">
                {section.heading}
              </h2>
              <p className="mt-4 text-sm leading-8 text-white/68 md:text-base">
                {section.body}
              </p>
            </section>
          ))}
        </div>
      </article>
    </main>
  );
}
