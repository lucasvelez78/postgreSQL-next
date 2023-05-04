import type { NextApiRequest, NextApiResponse } from "next";
import type { Data } from "@/app/page";
import prisma from "../../prisma/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const post: Data = JSON.parse(req.body);
    if (req.method === "POST") {
      if (!post.title.length) {
        return res
          .status(500)
          .json({ message: "Please do not leave this empty" });
      }
      try {
        const data = await prisma.post.create({
          data: {
            title: post.title,
            content: post.content,
          },
        });
        res.status(200).json(data);
      } catch (error) {
        return res.status(500).json(error);
      }
    }
  } catch (error) {
    return res.status(500).json(error);
  }
}
