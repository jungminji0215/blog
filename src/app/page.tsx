import Hero from "./components/Hero";
import Posts from "./components/post/Posts";
import RecentPost from "./components/post/RecentPost";

export default function Home() {
  return (
    <>
      <Hero />
      <RecentPost />
      <Posts />
    </>
  );
}
