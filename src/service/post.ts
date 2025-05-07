import { Post, PostDetail } from '@/types/postType';
import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';

// TODO 중복 코드 제거 및 리팩토링
export const getPost = async (category: string, slug: string): Promise<PostDetail> => {
  const filePath = path.join('posts', category, `${decodeURIComponent(slug)}.md`);

  const fileContent = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContent);

  return {
    title: data.title,
    subtitle: data.subtitle,
    date: data.date,
    category: data.category,
    content: content,
  };
};

export const getAllPosts = async (): Promise<Post[]> => {
  const posts: Post[] = [];

  try {
    const postsDir = path.join(process.cwd(), 'posts');
    const categories = fs.readdirSync(postsDir);

    categories.forEach((category) => {
      const categoryPath = path.join(postsDir, category);
      const files = fs.readdirSync(categoryPath);

      files.forEach((file) => {
        const filePath = path.join(categoryPath, file);
        const raw = fs.readFileSync(filePath, 'utf8');

        const { data, content } = matter(raw);

        posts.push({
          slug: data.path,
          title: data.title,
          subtitle: data.subtitle,
          date: data.date,
          thumbnailImage: data.thumbnailImage,
          category: category,
          content,
        });
      });
    });

    posts.sort((a, b) => (a.date < b.date ? 1 : -1));
    return posts;
  } catch (error) {
    if (error instanceof Error) {
      console.error('posts 폴더를 읽는 중 오류 발생 : ', error.message);
    } else {
      console.error('알 수 없는 오류 발생 : ', error);
    }
    return [];
  }
};

export const getPostsByCategory = async (category: string): Promise<Post[]> => {
  if (category === 'all') return getPosts();

  const posts: Post[] = [];

  try {
    const categoryPath = path.join(process.cwd(), 'posts', category);
    const files = fs.readdirSync(categoryPath);

    files.forEach((file) => {
      const filePath = path.join(categoryPath, file);
      const raw = fs.readFileSync(filePath, 'utf8');

      const { data, content } = matter(raw);

      posts.push({
        slug: data.path,
        title: data.title,
        subtitle: data.subtitle,
        date: data.date,
        thumbnailImage: data.thumbnailImage,
        category: data.category,
        content,
      });
    });

    return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
  } catch (error) {
    if (error instanceof Error) {
      console.error(`${category} 폴더를 읽는 중 오류 발생:`, error.message);
    } else {
      console.error('알 수 없는 오류 발생 : ', error);
    }
    return [];
  }
};

export const getPosts = (category?: string): Promise<Post[]> => {
  if (category) {
    return getPostsByCategory(category);
  } else {
    return getAllPosts();
  }
};
