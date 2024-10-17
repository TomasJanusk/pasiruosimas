import React from "react";

const Search = ({ val, onSearch, ...props }) => {
  return (
    <div>
      <input type="text" onChange={onSearch} value={val} {...props} />
    </div>
  );
};

export default Search;
