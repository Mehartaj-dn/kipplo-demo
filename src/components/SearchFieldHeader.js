import React from "react";

const SearchButton = ({ searchTerm, data, onSearch }) => {
  const handleSearch = () => {
    const term = (searchTerm || "").trim().toLowerCase();
    if (!term) {
      onSearch([]); // or onSearch(data) if you want to show all on empty search
      return;
    }
    const filtered = data.filter((item) =>
      (item.name || "").toLowerCase().includes(term)
    );
    onSearch(filtered);
  };

  return (
    <li className="w-60 h-14 bg-gray-50 rounded-xl flex gap-1 items-center justify-between">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        aria-hidden="true"
        className="ml-2 h-5 w-5 text-gray-700 hover:cursor-pointer"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
        ></path>
      </svg>

      <button
        onClick={handleSearch}
        className="p-1 bg-purple-500 shadow-lg hover:shadow-2xl border-2 border-white text-white rounded-md w-20 m-1"
      >
        Search
      </button>
    </li>
  );
};

export default SearchButton;
