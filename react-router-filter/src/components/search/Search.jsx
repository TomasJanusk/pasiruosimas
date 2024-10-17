const Search = ({ val, onSearch, ...props }) => {
  return (
    <input
      className="form-control"
      placeholder="Search posts"
      onChange={onSearch}
      value={val}
      {...props}
    />
  );
};
export default Search;
