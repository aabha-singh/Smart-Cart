import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import FilterBar from "../components/FilterBar";

const ProductPage = ({setCartCount}) => {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [cart, setCart] = useState([]);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // ✅ Fetch Products
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        const data = res.data.products || [];
        setProducts(data);
        setFiltered(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
        setLoading(false);
      });
  }, []);

  // ✅ Filter Logic
  useEffect(() => {
    let temp = [...products];

    if (search.trim() !== "") {
      temp = temp.filter((p) =>
        p.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category !== "") {
      temp = temp.filter((p) => p.category === category);
    }

    setFiltered(temp);
  }, [search, category, products]);

  // ✅ Categories
  const categories = [...new Set(products.map((p) => p.category))];

  // ✅ Add to Cart
const addToCart = (product) => {
  setCart((prev) => [...prev, product]);

  setCartCount((prev) => prev + 1);
};

  // ✅ UI States
  if (loading) {
    return <p className="text-center mt-10">Loading products...</p>;
  }

  if (error) {
    return <p className="text-center mt-10">Something went wrong</p>;
  }

  return (
    <div className="bg-gray-100 min-h-screen">

      <FilterBar
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
        categories={categories}
      />

      <div className="w-full px-4 md:px-10">
        {filtered.length === 0 ? (
          <p className="text-center mt-10">No products found</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 py-6">
            {filtered.map((p) => (
              <ProductCard
                key={p.id}
                product={p}
                addToCart={addToCart}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductPage;