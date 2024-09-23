import { client } from "../lib/client";

export async function getBlogs() {
  const query = `*[_type == "blogs"]{
    name,
    description,
    "imageUrl": image.asset->url,
    date,
    author,
    category
  }`;
  return await client.fetch(query);
}
