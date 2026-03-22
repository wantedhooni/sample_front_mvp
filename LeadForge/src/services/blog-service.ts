import { blogPosts } from "@/data/site-content";
import type { BlogPost } from "@/types";

/**
 * 블로그 콘텐츠를 화면 요구사항에 맞게 제공하는 서비스 클래스입니다.
 */
export class BlogService {
  /**
   * 전체 블로그 글 목록을 최신순으로 반환합니다.
   */
  async getPosts(): Promise<BlogPost[]> {
    return [...blogPosts].sort((left, right) =>
      right.publishedAt.localeCompare(left.publishedAt),
    );
  }

  /**
   * 메인 화면에 노출할 대표 글 목록을 반환합니다.
   */
  async getFeaturedPosts(limit: number): Promise<BlogPost[]> {
    const posts = await this.getPosts();
    return posts.filter((post) => post.featured).slice(0, limit);
  }

  /**
   * 슬러그 기준으로 단일 블로그 글을 조회합니다.
   */
  async getPostBySlug(slug: string): Promise<BlogPost | undefined> {
    const posts = await this.getPosts();
    return posts.find((post) => post.slug === slug);
  }
}
