import MyProfile from "./components/MyProfile";
import Posts from "./components/post/Posts";
import RecentPost from "./components/post/RecentPost";
export default function Home() {
  return (
    <main className="bg-yellow-200">
      <MyProfile />
      <RecentPost />
      {/* TODO 컴포넌트 분리 (컴포넌트명 고민중) */}
      <section className="max-w-screen-xl m-auto p-5 bg-gray-300">
        <ul className="text-xl font-bold my-3 flex gap-5 justify-center ">
          <li className="rounded-2xl border border-red-500 p-1">전체</li>
          <li className="rounded-2xl border border-red-500 p-1">자바스크립트</li>
          <li className="rounded-2xl border border-red-500 p-1">리액트</li>
          <li className="rounded-2xl border border-red-500 p-1">넥스트</li>
          <li className="rounded-2xl border border-red-500 p-1">프로젝트</li>
        </ul>
        <h3 className="text-xl font-bold my-3">전체</h3>
        <Posts />
      </section>
    </main>
  );
}
