import Form from "./Form";
import { getPosts } from "@/prisma/utils/posts";

export type Data = {
  id?: number;
  title: string;
  content?: string;
  published?: boolean;
};

// async function getPosts() {
//   const response = await fetch(`${process.env.BASE_URL}/api/getPosts`);
//   if (!response.ok) {
//     console.log(response);
//   }
//   return response.json();
// }

export default async function Home() {
  const { data } = await getPosts();

  return (
    <main className="flex flex-col items-center justify-between">
      <h1 className="my-10">Hello</h1>
      <Form />
      <div>
        {data?.map((post) => (
          <div className="my-10" key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
