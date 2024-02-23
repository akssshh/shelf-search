import { useState } from "react";

const Header = ({ onSearch }) => {
  const [searchInput, setSearchInput] = useState("");

  const handleInputChange = (event) => {
    setSearchInput(event.target.value);
  };
  const handleSearch = () => {
    onSearch(searchInput);
  };
  return (
    <nav>
      <div className="bg-cover bg-center  h-[500px] hero-background">
        <div className="flex items-center justify-center h-full">
          <input
            type="text"
            className="px-[200px] py-4 rounded-l-lg"
            placeholder="Search..."
            value={searchInput}
            onChange={handleInputChange}
          />
          <button className="px-6 py-4 bg-gray-800 text-white rounded-r-lg" onClick={handleSearch}>
            Go
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
