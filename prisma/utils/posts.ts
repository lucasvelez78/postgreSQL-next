import prisma from "../client";
import type { Data } from "@/app/page";

export async function getPosts() {
  try {
    const data = await prisma.post.findMany();
    return { data };
  } catch (error) {
    return { error };
  }
}

export async function createPost(post: Data) {
  try {
    const newPost = await prisma.post.create({ data: post });
    return { post: newPost };
  } catch (error) {
    return { error };
  }
}
