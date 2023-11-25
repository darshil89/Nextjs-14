"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Profile() {
  const router = useRouter();
  return (
    <main className="container min-h-screen  p-24">
      <h1 className="text-2xl">My list of profiles</h1>

      <div className="flex flex-col">
        <Link href="/profile/1">Profile 1</Link>
        <Link href="/profile/2">Profile 2</Link>
        <Link
          prefetch={true}
          href={{
            pathname: "/profile/1",
            query: { userName: "Darshil", age: 12 },
          }}
        >
          Profile 3
        </Link>
      </div>
    </main>
  );
}
