import { getPosts, getPostsByCategory } from '@/service/post';
import Categories from '@/components/Categories';
import PostItems from '@/components/post/PostItems';
import { getCategories } from '@/service/category';

type Props = {
  params: Promise<{ category: string }>;
};

export async function generateStaticParams({ params }: Props) {
  const { category } = await params;
  const posts = await getPostsByCategory(category);

  return posts.map((post) => ({
    category: post.category,
  }));
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;

  const categories = await getCategories();
  const posts = await getPosts(category ? category[0] : category);

  return (
    <section className="m-auto flex max-w-6xl flex-col gap-4 p-5">
      <Categories categories={categories} selected={category} />
      <PostItems posts={posts} />
    </section>
  );
}
