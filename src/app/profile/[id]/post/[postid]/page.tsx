"use client";

import { useParams } from "next/navigation";


export default function PostID() {
    const { postid } = useParams();
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
       my id post page -  {postid}
      </main>
    )
  }
  