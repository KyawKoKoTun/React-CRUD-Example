// CRUD - Create, Read, Update, Delete

import { useState } from "react";
import Button from "./components/Button";

function App() {
  const [posts, setPosts] = useState([
    { title: "Hello World", content: "This is the first post." },
    { title: "Second Posts", content: "This is the second post." },
  ]);

  const initialForm = {
    title: "",
    content: "",
  };

  const [form, setForm] = useState(initialForm);
  const [editingIndex, setEditingIndex] = useState(null);

  const handleFormChange = (event) => {
    setForm((prev) => {
      return { ...prev, [event.target.name]: event.target.value };
    });
  };

  const handleBtnSubmit = () => {
    if (editingIndex !== null) {
      setPosts((prev_posts) => {
        return prev_posts.map((post, index) =>
          index === editingIndex ? form : post
        );
      });
      setEditingIndex(null);
    } else {
      setPosts((prev) => {
        return [...prev, form];
      });
    }
    setForm(initialForm);
  };

  const deletePost = (postIndex) => {
    setPosts((prev_posts) =>
      prev_posts.filter((post, index) => index !== postIndex)
    );
  };

  const editPost = (postIndex) => {
    setEditingIndex(postIndex);
    const post = posts[postIndex];
    setForm({
      title: post.title,
      content: post.content,
    });
  };

  return (
    <>
      <div className="px-20 pt-4">
        <div className="rounded-2xl mb-4 shadow-md p-8 flex flex-col gap-4 ">
          <input
            onChange={handleFormChange}
            placeholder="Title"
            className="bg-stone-100 block"
            name="title"
            value={form.title}
          />
          <textarea
            onChange={handleFormChange}
            placeholder="Content"
            className="bg-stone-100 block"
            name="content"
            value={form.content}
          />
          <Button variant={"primary"} onClick={handleBtnSubmit}>
            {editingIndex !== null ? "Edit Post" : "Create Post"}
          </Button>
        </div>
        <h1 className="text-4xl font-bold mb-8">Posts</h1>
        {posts.map((post, index) => (
          <div
            key={index}
            className="bg-indigo-50 mb-4 p-8 shadow-md rounded-2xl flex flex-col gap-4"
          >
            <h1 className="text-2xl font-bold">{post.title}</h1>
            <p>{post.content}</p>

            <Button variant={"primary"} onClick={() => editPost(index)}>
              Edit
            </Button>
            <Button variant={"danger"} onClick={() => deletePost(index)}>
              Delete
            </Button>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
