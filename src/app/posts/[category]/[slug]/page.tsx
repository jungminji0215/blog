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
    <article className="overflow-hidden max-w-screen-md m-auto">
      <section className="flex flex-col p-5">
        <h1 className="font-bold text-4xl border-b border-yellow-500 py-3">{post.title}</h1>
        <p className="text-gray-500 p-2 text-end">{post.date}</p>
        <div className="py-5 px-2 mb-5">
          <MarkdownViewer content={post.content} />
        </div>
      </section>
    </article>
  );
}
