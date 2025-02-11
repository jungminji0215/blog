import MarkdownViewer from "@/app/components/MarkdownViewer";
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
    <article className="bg-gray-200 max-w-screen-xl m-auto p-5">
      <h1>{post.title}</h1>
      <MarkdownViewer content={post.content} />
    </article>
  );
}
