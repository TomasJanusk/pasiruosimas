import { useState } from "react";
import data from "../../data/data";
import Search from "../search/Search";
import Posts from "../posts/Posts";

const Main = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };
  const filteredPosts = data.filter((post) => {
    return post.title.includes(searchTerm);
  });
  
  return (
    <div className="main container">
      <form className="d-flex">
        <Search name="search" onSearch={handleInputChange} val={searchTerm} />
      </form>
      <Posts data={filteredPosts} />
    </div>
  );
};
export default Main;
