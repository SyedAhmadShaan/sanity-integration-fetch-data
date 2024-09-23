// src/app/page.tsx
import { client } from "../sanity/lib/client";
import Image from "next/image";
import React from "react";

type Blog = {
  name: string;
  description: string;
  imageUrl: string;
  date: string;
  author: string;
  category: string;
};

async function getBlogs(): Promise<Blog[]> {
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

const BlogsPage: React.FC = () => {
  const [blogs, setBlogs] = React.useState<Blog[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchData = async () => {
      const blogsData = await getBlogs();
      setBlogs(blogsData);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Blogs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {blogs.map((blog, index) => (
          <div key={index} className="p-4 border rounded-lg">
            <Image
              src={blog.imageUrl}
              alt={blog.name}
              width={600}
              height={400}
              className="w-full h-48 object-cover mb-4 rounded-lg"
            />
            <h2 className="text-xl font-bold mb-2">{blog.name}</h2>
            <p className="text-gray-600 mb-2">{blog.description}</p>
            <p className="text-gray-500 text-sm">
              By {blog.author} on {new Date(blog.date).toLocaleDateString()}
            </p>
            <p className="text-gray-500 text-sm">Category: {blog.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogsPage;
