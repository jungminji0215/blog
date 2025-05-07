import Giscus from '@/components/Giscus';
import MarkdownViewer from '@/components/MarkdownViewer';
import { getPost, getPosts } from '@/service/post';

type Props = {
  params: Promise<{ category: string; slug: string }>;
};

export async function generateStaticParams() {
  const posts = await getPosts();

  return posts.map((post) => ({
    category: post.category,
    slug: post.slug,
  }));
}

export async function generateMetadata(props: Props) {
  const params = await props.params;
  const post = await getPost(params.category, params.slug);

  // TODO 자동 생성으로 변경
  const ogImageUrl = `/images/posts/${post.category}/${params.slug}/thumbnail.png`;

  return {
    metadataBase: new URL('https://www.jungminji.com'),
    title: `Minji's Devlog | ${post.title}`,
    description: post.subtitle,
    openGraph: {
      type: 'article',
      title: `Minji's Devlog | ${post.title}`,
      description: post.subtitle,
      url: `https://www.jungminji.com/posts/${params.category}/${params.slug}`,
      siteName: "Minji's Devlog",
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: '게시글 썸네일 이미지',
        },
      ],
    },
  };
}

export default async function PostDetailPage(props: {
  params: Promise<{ category: string; slug: string }>;
}) {
  const params = await props.params;
  const post = await getPost(params.category, params.slug);

  return (
    <article className="m-auto max-w-3xl overflow-hidden p-5">
      <header className="flex flex-col">
        <h1 className="border-b border-yellow-500 py-3 text-4xl font-bold">{post.title}</h1>
        <time className="p-2 text-end text-gray-500">{post.date}</time>
      </header>
      <section className="mb-5 px-2 py-5">
        <MarkdownViewer content={post.content} />
      </section>
      <footer className="mt-20">
        <Giscus />
      </footer>
    </article>
  );
}
