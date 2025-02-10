import fs from "fs";
import path from "path";
import { Post, PostDetail } from "@/types/postType";
import matter from "gray-matter";

/** TODO 코드 정리 */
export const postApi = {
  async getAllPosts(): Promise<Post[]> {
    const posts: Post[] = [];

    /**
     * node.js 의 fs 와 path 모듈을 이용해서
     * 서버 사이드에서 파일 시스템을 접근하여 파일 목록을 읽고 내용을 가져오기
     * 모든 게시글을 읽어서 배열로 반환하자!
     */

    // contents 폴더의 절대 경로
    const contentsDirectory = path.join(process.cwd(), "contents");

    // 카테고리
    const categories = fs.readdirSync(contentsDirectory);

    categories.forEach((categoryFolder) => {
      // 카테고리 전체 경로
      const categoryPath = path.join(contentsDirectory, categoryFolder);

      if (fs.statSync(categoryPath).isDirectory()) {
        // 카테고리 폴더 내의 게시글 폴더들
        const postFolders = fs.readdirSync(categoryPath);

        postFolders.forEach((postFolder) => {
          const postPath = path.join(categoryPath, postFolder);

          if (fs.statSync(postPath).isDirectory()) {
            // 파일명
            const mdFiles = fs.readdirSync(postPath).filter((file) => file.endsWith(".md"));
            // 파일 없으면 return
            if (mdFiles.length === 0) return;

            const mdFile = mdFiles[0];
            const filePath = path.join(postPath, mdFile);
            const fileContent = fs.readFileSync(filePath, "utf8");
            const { data, content } = matter(fileContent);

            posts.push({
              slug: postFolder,
              title: data.title,
              date: data.date,
              thumbnailImage: data.thumbnailImage,
              category: data.category || categoryFolder,
              content,
            });
          }
        });
      }
    });

    posts.sort((a, b) => (a.date < b.date ? 1 : -1));
    return posts;
  },

  async getCategory(): Promise<string[]> {
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

  async getPost(category: string, fileName: string): Promise<PostDetail> {
    const filePath = path.join(
      process.cwd(),
      "contents",
      category,
      decodeURIComponent(fileName),
      `${decodeURIComponent(fileName)}.md`
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
