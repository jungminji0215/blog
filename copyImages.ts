const fs = require("fs-extra");
const path = require("path");

const contentsDir = path.join(__dirname, "contents"); // 기존 폴더
const destDir = path.join(__dirname, "public", "images", "posts"); // 옮길 폴더

async function copyImages() {
  try {
    // contents 폴더 내의 카테고리 폴더 목록 (예: javascript, react)
    const categories = fs.readdirSync(contentsDir);

    for (const category of categories) {
      const categoryPath = path.join(contentsDir, category);
      if (!fs.statSync(categoryPath).isDirectory()) continue;

      const postFolders = fs.readdirSync(categoryPath);

      for (const postFolder of postFolders) {
        const postPath = path.join(categoryPath, postFolder);
        if (!fs.statSync(postPath).isDirectory()) continue;

        const imagesFolder = path.join(postPath, "images");
        if (fs.existsSync(imagesFolder) && fs.statSync(imagesFolder).isDirectory()) {
          const dest = path.join(destDir, category, postFolder);
          await fs.ensureDir(dest);
          await fs.copy(imagesFolder, dest);

          console.log(`Copied images from ${imagesFolder} to ${dest}`);
        } else {
          console.log(`No images folder found in ${postPath}`);
        }
      }
    }
  } catch (error) {
    console.error("Error copying images:", error);
  }
}

// 스크립트 실행
copyImages();
