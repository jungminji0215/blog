import Giscus from "@/app/components/Giscus";
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
    <article className="overflow-hidden max-w-screen-md m-auto p-5">
      <header className="flex flex-col">
        <h1 className="font-bold text-4xl border-b border-yellow-500 py-3">{post.title}</h1>
        <time className="text-gray-500 p-2 text-end">{post.date}</time>
      </header>
      <section className="py-5 px-2 mb-5">
        <MarkdownViewer content={post.content} />
      </section>
      <footer>
        <Giscus />
      </footer>
    </article>
  );
}
