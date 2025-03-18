import UserCard from "@/components/UserCard";

export default function Home() {
  return (
    <main className="flex justify-center items-center h-screen">
      <UserCard userId={1} />
    </main>
  );
}