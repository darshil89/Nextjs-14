"use client";
import { useSearchParams, useParams } from "next/navigation";


export default function UserId() {
  const query = useSearchParams();
  const queryValues = query.values();

  return (
    <div>
      <h1>User_Id Page</h1>
      <h2>{query.get("news")}</h2>
      <h2>{Array.from(queryValues).map((value, index) => (
          <li key={index}>{value}</li>
        ))}</h2>
        
    </div>
  );
}

