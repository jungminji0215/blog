import fs from "fs";
import path from "path";
import { Post } from "@/types/postType";
import matter from "gray-matter";

/** TODO 코드 정리 */
export const postApi = {
  async getAllPosts(): Promise<Post[]> {
    console.log("포스트 데이터 조회");
    const posts: Post[] = [];

    /**
     * node.js 의 fs 와 path 모듈을 이용해서
     * 서버 사이드에서 파일 시스템을 접근하여 파일 목록을 읽고 내용을 가져오기
     * 모든 게시글을 읽어서 배열로 반환하자!
     */

    // contents 폴더의 절대 경로
    const contentsDirectory = path.join(process.cwd(), "contents");
    // console.log("contentsDirectory :>> ", contentsDirectory);

    // 카테고리
    const categories = fs.readdirSync(contentsDirectory);
    // console.log("categories :>> ", categories);

    categories.forEach((categoryFolder) => {
      // console.log("categoryFolder :>> ", categoryFolder);

      // 카테고리 전체 경로
      const categoryPath = path.join(contentsDirectory, categoryFolder);
      // console.log("categoryPath :>> ", categoryPath);

      // 해당 카테고리 전체 경로가 디렉토리 인 경우 -> 파일을 읽는다
      if (fs.statSync(categoryPath).isDirectory()) {
        // console.log("디렉토리가 맞아요");

        // 해당 카테고리 안의 모든 md 파일 조회
        const fileNames = fs.readdirSync(categoryPath);
        // console.log("fileNames :>> ", fileNames);

        // 조회한 파일들 순회
        fileNames.forEach((fileName) => {
          // md 파일만
          if (fileName.endsWith(".md")) {
            // 해당 파일의 풀 경로
            const filePath = path.join(categoryPath, fileName);

            // 해당 파일 내용
            const fileContent = fs.readFileSync(filePath, "utf8");

            // gray matter 라이브러리로 메타데이터 추출
            const { data, content } = matter(fileContent);

            // 파일명에서 확장자 제거 (예: "20250111_자바스크립트의_역사")
            const slug = fileName.replace(/\.md$/, "");

            posts.push({
              slug,
              title: data.title,
              date: data.date,
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
};
