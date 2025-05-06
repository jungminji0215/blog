import type { MetadataRoute } from 'next';
import { postApi } from '@/service/posts';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await postApi.getAllPosts();

  return posts.map((post) => ({
    url: `https://www.jungminji.com/posts/${post.category}/${post.slug}`,
    lastModified: post.date,
  }));
}
