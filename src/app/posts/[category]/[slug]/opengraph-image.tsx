import { postApi } from "@/service/posts";
import { ImageResponse } from "next/og";

export const alt = "jungminji blog";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: { category: string; slug: string };
}) {
  const post = await postApi.getPost(params.category, params.slug);

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 48,
          background: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {post.title}
      </div>
    ),
    {
      ...size,
    }
  );
}
