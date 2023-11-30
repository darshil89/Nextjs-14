"use client";

import Header from "@/components/Header";
import Image from "next/image";
export default function Home() {
  const functionDisplay = async () => {
    const response =await fetch("http://localhost:3000/api/users", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
    if (response.ok) {
      console.log("Perfect! Your settings are saved.");
      console.log(await response.json());

    }
   
  };
  return (
    <div className=" p-24">
      <Header />
      <h1>Home Page</h1>

      <Image src="/images/bg.jpg" alt="image" width={1000} height={1000} />
      <button onClick={functionDisplay}>Display</button>
    </div>
  );
}
