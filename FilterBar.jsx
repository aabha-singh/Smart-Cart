const FilterBar = ({ search, setSearch, category, setCategory, categories }) => {
  return (
    <div className="flex gap-4 p-4">
      
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
 className="w-1/2 px-4 py-2 rounded-full bg-gray-100 border border-blue-400 
             focus:outline-none focus:ring-2 focus:ring-indigo-400 
             focus:bg-white shadow-sm transition"
      />

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="border p-2 rounded-4xl"
      >
        <option value="">All Categories</option>
        {categories.map((c, i) => (
          <option key={i} value={c}>
            {c}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterBar;