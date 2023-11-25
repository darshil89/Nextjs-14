"use client";
import { useRouter } from "next/navigation";

export default function Profile() {
  const router = useRouter();
  return (
    <main className="container min-h-screen  p-24">
      <h1 className="text-2xl">My list of profiles</h1>

      <ul>
        <li onClick={() => router.push("/profile/1")}>Profile 1</li>
        <li onClick={() => router.push("/profile/2")}>Profile 2</li>
        <li onClick={() => router.push("/profile/3")}>Profile 3</li>
      </ul>
    </main>
  );
}
