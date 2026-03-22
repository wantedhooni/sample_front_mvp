import { products } from "@/data/products";
import type { Product, ProductCategory } from "@/types/store";

/**
 * 디지털 상품 카탈로그를 조회하고 가공하는 서비스입니다.
 */
export class ProductService {
  /**
   * 전체 상품 목록을 반환합니다.
   */
  getAllProducts(): Product[] {
    return products;
  }

  /**
   * 카테고리 조건에 맞는 상품 목록을 반환합니다.
   */
  getProductsByCategory(category?: ProductCategory | "All"): Product[] {
    if (!category || category === "All") {
      return products;
    }

    return products.filter((product) => product.category === category);
  }

  /**
   * 슬러그로 단일 상품을 조회합니다.
   */
  getProductBySlug(slug: string): Product | undefined {
    return products.find((product) => product.slug === slug);
  }

  /**
   * 대표 노출용 상품 목록을 반환합니다.
   */
  getFeaturedProducts(): Product[] {
    return products.slice(0, 3);
  }
}

export const productService = new ProductService();
