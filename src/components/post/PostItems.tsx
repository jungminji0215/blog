import React from 'react';
import PostCard from './PostCard';
import { Post } from '@/types/postType';

type Props = {
  posts: Post[];
};

export default function PostItems({ posts }: Props) {
  return (
    <ul className="grid grid-cols-1 gap-10 md:grid-cols-3 lg:grid-cols-4">
      {posts?.map((post) => {
        return (
          <li key={post.title}>
            <PostCard post={post} />
          </li>
        );
      })}
    </ul>
  );
}
