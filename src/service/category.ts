import path from 'path';
import fs from 'fs';

export const getCategories = async (): Promise<string[]> => {
  const postDirectory = path.join(process.cwd(), 'posts');
  return fs.readdirSync(postDirectory);
};
