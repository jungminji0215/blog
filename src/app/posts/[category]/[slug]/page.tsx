import Giscus from "@/components/Giscus";
import MarkdownViewer from "@/components/MarkdownViewer";
import { postApi } from "@/service/posts";

export async function generateStaticParams() {
  const posts = await postApi.getAllPosts();

  return posts.map((post) => ({
    category: post.category,
    slug: post.slug,
  }));
}

export async function generateMetadata(props: {
  /** MEMO 오류로 인해 Promise 명시 */
  params: Promise<{ category: string; slug: string }>;
}) {
  const params = await props.params;
  const post = await postApi.getPost(params.category, params.slug);
  const ogImageUrl = `/images/posts/${post.category}/${params.slug}/"thumbnail.png"`;

  return {
    title: `Minji's Devlog | ${post.title}`,
    description: post.subtitle,
    openGraph: {
      type: "article",
      title: post.title,
      description: post.subtitle,
      url: `https://www.jungminji.com/posts${params.category}/${params.slug}`,
      siteName: "Minji's Devlog",
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
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
      <footer className="mt-20">
        <Giscus />
      </footer>
    </article>
  );
}
