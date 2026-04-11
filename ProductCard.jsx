const ProductCard = ({ product, addToCart }) => {
  return (
<div className="bg-white p-7 rounded-lg shadow hover:shadow-lg transition duration-300">

  <img
    src={product?.thumbnail || product?.images?.[0]}
    alt={product?.title}
    className="h-32 w-full object-contain"
  />

  <h2 className="text-sm  text-center font-medium mt-2 line-clamp-2">
    {product.title}
  </h2>

  <p className="text-green-600 mt-2 text-sm font-semibold">
    ${product.price}
  </p>

  <p className="text-xs mt-1 text-gray-500">
    {product.category}
  </p>

  <button
    onClick={() => addToCart(product)}
    className="w-full mt-3 bg-black text-white py-1 text-sm rounded"
  >
    Add to Cart
  </button>
</div>
  );
};

export default ProductCard;