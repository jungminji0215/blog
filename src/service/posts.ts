import fs from "fs";
import path from "path";
import { Post, PostDetail } from "@/types/postType";
import matter from "gray-matter";

export const postApi = {
  async getAllPosts(): Promise<Post[]> {
    console.log("========= getAllPosts ==========");
    const posts: Post[] = [];

    const categories = fs.readdirSync("contents");

    categories.forEach((categoryFolder) => {
      const categoryPath = path.join("contents", categoryFolder);

      const postFolders = fs.readdirSync(categoryPath);

      postFolders.forEach((postFolder) => {
        const postPath = path.join(categoryPath, postFolder);
        const filePath = path.join(postPath, "post.md");
        const fileContent = fs.readFileSync(filePath, "utf8");

        const { data, content } = matter(fileContent);

        posts.push({
          slug: data.path,
          title: data.title,
          date: data.date,
          thumbnailImage: data.thumbnailImage,
          category: data.category,
          content,
        });
      });
    });

    posts.sort((a, b) => (a.date < b.date ? 1 : -1));
    return posts;
  },

  async getCategory(): Promise<string[]> {
    console.log("========= getCategory ==========");

    const contentsDirectory = path.join(process.cwd(), "contents");
    const categories = fs.readdirSync(contentsDirectory);
    return categories;
  },

  async getRecentPosts(): Promise<Post[]> {
    const posts = await this.getAllPosts();
    const today = new Date();
    const twoWeeksAgo = new Date();

    twoWeeksAgo.setDate(today.getDate() - 14);

    const recentPosts = posts.filter((post) => {
      const postDate = new Date(post.date);
      return postDate >= twoWeeksAgo;
    });

    return recentPosts;
  },

  async getPost(category: string, slug: string): Promise<PostDetail> {
    console.log("========= getPost ==========");

    const filePath = path.join(
      // process.cwd(),
      "contents",
      category,
      decodeURIComponent(slug),
      "post.md"
    );

    const fileContent = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContent);

    return {
      title: data.title,
      date: data.date,
      category: data.category,
      content: content,
    };
  },
};
