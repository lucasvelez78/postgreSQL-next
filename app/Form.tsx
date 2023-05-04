"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Form() {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const router = useRouter();

  async function createPost(e: React.FormEvent) {
    e.preventDefault();
    const data = await fetch(`/api/createPost`, {
      method: "POST",
      body: JSON.stringify({ title, content }),
    });
    const res = await data.json();
    router.refresh();
    if (!res.ok) console.log(res.message);
  }

  return (
    <form className="my-10 flex-col" onSubmit={createPost}>
      <div className="block my-4">
        <input
          className=" bg-slate-300 "
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="block my-4">
        <input
          className=" bg-slate-300 "
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>

      <button type="submit">Make a new post</button>
    </form>
  );
}
