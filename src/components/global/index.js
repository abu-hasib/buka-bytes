const isSearched = (searchTerm) => (item) =>
  !searchTerm || item.city.toLowerCase().includes(searchTerm.toLowerCase());

export default isSearched;
