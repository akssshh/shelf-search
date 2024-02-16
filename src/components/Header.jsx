const Header = () => {
  return (
    <nav className="">
      <div className="bg-cover bg-center  h-[500px] hero-background">
        <div className="flex items-center justify-center h-full">
          <input
            type="text"
            className="px-[100px] py-2 rounded-l-lg"
            placeholder="Search..."
          />
          <button className="px-4 py-2 bg-gray-800 text-white rounded-r-lg">
            Go
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
