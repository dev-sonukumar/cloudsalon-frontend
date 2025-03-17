import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

const PostsManager = ({ posts, setPosts }) => {
  const [newPost, setNewPost] = useState({ title: "", content: "" });

  const addPost = () => {
    if (!newPost.title || !newPost.content) return;
    setPosts([...posts, { ...newPost, id: Date.now() }]);
    setNewPost({ title: "", content: "" });
  };

  const deletePost = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 text-center">Manage Posts</h1>
      <div className="flex flex-col sm:flex-row gap-2 w-full mb-4">
        <Input
          type="text"
          placeholder="Post Title"
          className="w-full sm:w-auto"
          value={newPost.title}
          onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
        />
        <Input
          type="text"
          placeholder="Content"
          className="w-full sm:w-auto"
          value={newPost.content}
          onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
        />
        <Button onClick={addPost}>Add</Button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {posts.map((post) => (
          <Card key={post.id} className="p-4 relative">
            <CardContent>
              <h2 className="text-lg font-semibold">{post.title}</h2>
              <p>{post.content}</p>
              <Button
                variant="destructive"
                className="mt-2"
                onClick={() => deletePost(post.id)}
              >
                Delete
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PostsManager;
