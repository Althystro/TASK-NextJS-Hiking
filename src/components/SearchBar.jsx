"use client";

function SearchBar({ setQuery }) {
  return (
    <div className="flex justify-center w-[100% ] mt-2">
      <input
        type="search"
        id="form1"
        className="w-full max-w-4xl px-4 py-2 text-lg border border-gray-300 rounded-lg focus:outline-none  focus:shadow focus:shadow-primary"
        placeholder="Search"
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
