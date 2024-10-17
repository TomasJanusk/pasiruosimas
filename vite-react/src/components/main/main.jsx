import Article from "../article/Article";
import AddPost from "../addPost/AddPost";
import PostsData from "../../data/PostsData";
import { useState } from "react";

const Main = () => {
  const [addForm, setAddForm] = useState(false);
  const [posts, setPosts] = useState(PostsData);

  const handlePostData = (data) => {
    setPosts((prevData) => {
      return [data, ...prevData];
    });
  };
  console.log(posts);

  const formHandler = () => {
    setAddForm(true);
  };

  return (
    <>
      <section>
        <button onClick={formHandler}>Prideti naujiena</button>
        {addForm && <AddPost onSave={handlePostData} />}
      </section>
      <main>
        {posts.map((post) => (
          <Article key={post.id} title={post.title} description={post.desc} />
        ))}
      </main>
    </>
  );
};
export default Main;
