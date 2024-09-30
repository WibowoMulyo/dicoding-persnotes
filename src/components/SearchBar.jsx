const SearchBar = ({ setSearchQuery }) => {
  return (
    <input
      type="text"
      placeholder="Cari Catatan..."
      onChange={(e) => setSearchQuery(e.target.value)}
    />
  );
};

export default SearchBar;
