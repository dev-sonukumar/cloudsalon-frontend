import React from "react";
import { bis } from "../utils/ImgUtils";

const data = [
  {
    id: 1,
    title: "Post Title 1",
    img: bis,
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae odio sapiente, pariatur praesentium quasi ipsum aut omnis eum. Minus cum quaerat nostrum asperiores commodi ducimus earum? Recusandae praesentium officiis illo earum mollitia aut eos cum ex est? Esse reiciendis doloremque aspernatur quasi fugit ut nesciunt totam similique explicabo deserunt non nemo sit provident ab dolore possimus ea odio nihil laborum ipsa, voluptas voluptates placeat culpa! Molestias tempore dolor similique numquam neque, cumque accusamus odit nam consectetur possimus ipsam quidem adipisci consequatur aliquam iusto, quam eos distinctio dolorem at qui. Dignissimos porro id commodi voluptatum error delectus animi unde, obcaecati odio",
  },
  // Add more posts here...
];

const Post = () => {
  return (
    <div className="container px-5 ">
      <div className="mb-12">
        {data.map((post) => (
          <div key={post.id} className="post">
            <div className="post-img mb-14">
              <img
                src={post.img}
                alt={post.title}
                className="w-full h-80 bdr object-contain"
              />
            </div>
            <div className="post-content">
              <h2 className="font-bold text-2xl">{post.title}</h2>
              <p>{post.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Post;
