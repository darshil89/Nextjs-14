"use client";
import { useRouter } from "next/navigation";
export default function ProfileID({ params }: { params: { id: string } }) {
  const router = useRouter();

  return (
    <main className="container p-24">
      <h1 className="text-2xl">Profile page id - {params.id}</h1>
      <div onClick={() => router.push("/profile")}>Back to profile page</div>
    </main>
  );
}
