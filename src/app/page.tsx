import Image from "next/image";
import profileImage from "../../public/minji.jpeg";
export default function Home() {
  return (
    <main>
      <section className="flex ms:flex-col bg-green-200 justify-center gap-5 p-5">
        <Image src={profileImage} alt="프로필 사진" width={200} height={200} priority className="rounded-full" />
        <div className="flex flex-col justify-center">
          <p>안녕하세요.</p>
          <p>개발 공부 내용을 기록합니다. ✏️</p>
          <p className="text-gray-300 text-sm cursor-pointer mt-3">🌼 저의 사이트에 놀러오세요 🌼</p>
        </div>
      </section>
    </main>
  );
}
