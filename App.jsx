import { useState } from "react";
import ProductPage from "./pages/ProductPage";
import About from "./pages/About";
import Navbar from "./components/Navbar";

function App() {
  const [active, setActive] = useState("home");
  const [cartCount, setCartCount] = useState(0);

  return (
    
    <div className="min-h-screen  bg-gray-100">

      {/* NAVBAR */}
      <Navbar
        active={active}
        setActive={setActive}
        cartCount={cartCount}
      />

      {/* HOME PAGE */}
   {active === "home" && (
  <div
    className="w-full h-screen flex items-center justify-center relative"
    style={{
      backgroundImage:
        "url('https://plus.unsplash.com/premium_photo-1683288295826-9c0bfba5d10b?q=80&w=735&auto=format&fit=crop')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}
  >

    {/* CONTENT BOX */}
    <div className="relative flex flex-col items-center text-center gap-4 px-6">

      <h1 className="text-4xl md:text-5xl font-bold text-black">
        Welcome to SmartCart 🛒
      </h1>

      <p className="text-gray-600 text-lg">
        Start exploring amazing products
      </p>

      <button
        onClick={() => setActive("products")}
        className="mt-4 px-6 py-2 bg-purple-600 text-white rounded-full shadow-md hover:bg-purple-700 hover:scale-105 active:scale-95 transition"
      >
        Go to Products
      </button>

    </div>
  </div>
)}
      {/* PRODUCTS PAGE */}
      {active === "products" && (
        <ProductPage setCartCount={setCartCount} />
      )}

      {/* ABOUT PAGE */}
      {active === "about" && <About />}

    </div>
  );
}

export default App;