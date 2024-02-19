const Header = () => {
  return (
    <nav>
      <div className="bg-cover bg-center  h-[500px] hero-background">
        <div className="flex items-center justify-center h-full">
          <input
            type="text"
            className="px-[200px] py-4 rounded-l-lg"
            placeholder="Search..."
          />
          <button className="px-6 py-4 bg-gray-800 text-white rounded-r-lg">
            Go
          </button>
        </div>
      </div>
    </nav>

    
  );
};

export default Header;
