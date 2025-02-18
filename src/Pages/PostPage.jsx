import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const PostPage = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`https://api.example.com/posts/${postId}`);
        const data = await response.json();
        setPost(data);
      } catch (error) {
        console.error("Error fetching post:", error);
      }
    };

    fetchPost();
  }, [postId]);

  if (!post) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="mb-8">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-64 object-cover rounded-lg"
        />
        <h1 className="text-2xl font-bold mt-4">{post.title}</h1>
        <p className="text-gray-600 mt-2">{post.content}</p>
      </div>
    </div>
  );
};

export default PostPage;
