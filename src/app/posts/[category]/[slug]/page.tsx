import Giscus from "@/app/components/Giscus";
import MarkdownViewer from "@/app/components/MarkdownViewer";
import { postApi } from "@/service/posts";

export async function generateMetadata(props: {
  params: Promise<{ category: string; slug: string }>;
}) {
  const params = await props.params;

  return {
    title: `Minji's Devlog ${decodeURIComponent(params.slug)}`,
    description: params.slug,
  };
}

export default async function PostDetailPage(props: {
  params: Promise<{ category: string; slug: string }>;
}) {
  const params = await props.params;
  const post = await postApi.getPost(params.category, params.slug);

  return (
    <article className="overflow-hidden max-w-screen-md m-auto p-5">
      <header className="flex flex-col">
        <h1 className="font-bold text-4xl border-b border-yellow-500 py-3">
          {post.title}
        </h1>
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
