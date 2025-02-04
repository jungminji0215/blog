import MyProfile from "./components/MyProfile";
import RecentPost from "./components/post/RecentPost";
export default function Home() {
  return (
    <main className="bg-yellow-200">
      <MyProfile />
      <RecentPost />
    </main>
  );
}
