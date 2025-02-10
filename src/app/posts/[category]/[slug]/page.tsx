import { postApi } from "@/service/posts";

type Props = {
  params: {
    category: string;
    slug: string;
  };
};

export default async function PostDetailPage({ params: { category, slug } }: Props) {
  const post = await postApi.getPost(category, slug);

  return (
    <>
      <h1>{post.title}</h1>
      <pre>{post.content}</pre>
    </>
  );
}
