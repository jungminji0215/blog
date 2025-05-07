import type { MetadataRoute } from 'next';
import { getPosts } from '@/service/post';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getPosts();

  return posts.map((post) => ({
    url: `https://www.jungminji.com/posts/${post.category}/${post.slug}`,
    lastModified: post.date,
  }));
}
