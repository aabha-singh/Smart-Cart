const Navbar = ({ cartCount, setActive, active }) => {
  return (
    <div className="sticky top-0 z-50 flex items-center justify-between w-full px-6 h-12 bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 text-white shadow-md">

      {/* LOGO */}
      <h1
        onClick={() => setActive("home")}
        className="text-lg font-bold cursor-pointer"
      >
        SmartCart
      </h1>

      {/* LINKS */}
      <div className="flex gap-6 text-sm font-medium">

        <button onClick={() => setActive("home")} className="relative">
          Home
          {active === "home" && (
            <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-white"></span>
          )}
        </button>

        <button onClick={() => setActive("products")} className="relative">
          Products
          {active === "products" && (
            <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-white"></span>
          )}
        </button>

        <button onClick={() => setActive("about")} className="relative">
          About
          {active === "about" && (
            <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-white"></span>
          )}
        </button>

      </div>

      {/* CART */}
      <div className="bg-white/20 px-3 py-1 rounded-full text-sm">
        🛒 {cartCount}
      </div>

    </div>
  );
};

export default Navbar;