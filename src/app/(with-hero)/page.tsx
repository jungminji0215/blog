import { getCategories } from '@/service/category';
import { getPosts } from '@/service/post';
import Categories from '@/components/Categories';
import PostItems from '@/components/post/PostItems';

export default async function Home() {
  const categories = await getCategories();
  const posts = await getPosts();

  return (
    <section className="m-auto flex max-w-6xl flex-col gap-4 p-5">
      <Categories categories={categories} selected="all" />
      <PostItems posts={posts} />
    </section>
  );
}
