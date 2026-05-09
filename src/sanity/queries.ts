import type { StoreProduct } from "@/components/store/store-data";
import { getSanityClient } from "./client";

const productsQuery = `*[_type == "product" && defined(name)] | order(order asc, _createdAt desc) {
  "id": _id,
  badge,
  brand,
  name,
  description,
  features,
  specifications,
  "slug": coalesce(slug.current, _id),
  "imageUrl": image.asset->url
}`;

const productBySlugQuery = `*[_type == "product" && (slug.current == $slug || _id == $slug)][0] {
  "id": _id,
  badge,
  brand,
  name,
  description,
  features,
  specifications,
  "slug": coalesce(slug.current, _id),
  "imageUrl": image.asset->url
}`;

export async function getProducts(limit?: number): Promise<StoreProduct[]> {
  const client = getSanityClient();

  if (!client) {
    return [];
  }

  try {
    const products = await client.fetch<StoreProduct[]>(productsQuery);

    return limit ? products.slice(0, limit) : products;
  } catch {
    return [];
  }
}

export async function getProductBySlug(slug: string): Promise<StoreProduct | null> {
  const client = getSanityClient();

  if (!client) {
    return null;
  }

  try {
    return await client.fetch<StoreProduct | null>(productBySlugQuery, { slug });
  } catch {
    return null;
  }
}
