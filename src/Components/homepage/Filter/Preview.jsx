import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const Preview = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => console.error("Failed to fetch product:", err));
  }, [id]);

  if (!product) {
    return (
      <p className="text-center text-gray-600 mt-10">Loading product...</p>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-xl shadow-lg p-7 w-full max-w-4xl">
        <img
          className="h-80 w-full object-contain mb-4"
          src={product.image}
          alt={product.title}
        />

        <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
        <p className="text-sm text-gray-600 mb-1">
          Category: {product.category}
        </p>
        <p className="text-sm text-gray-600 mb-2">
          Description: {product.description}
        </p>

        <div className="flex gap-2 items-center mb-2">
          <span className="bg-green-600 text-white px-2 py-1 rounded text-sm">
            {product.rating.rate} ★
          </span>
          <span className="text-sm text-gray-600">
            ({product.rating.count} reviews)
          </span>
        </div>
        <div className="flex justify-between">
          <div className="flex gap-2 items-center mb-2">
            <span className="text-lg font-bold text-black">
              ₹{Math.floor(product.price * 80)}
            </span>
            <span className="line-through text-gray-400 text-sm">
              ₹{Math.floor(product.price * 80) + 1000}
            </span>
            <span className="text-green-700 text-sm">56% off</span>
          </div>
          <div className="w-1/2 cursor-pointer p-1 text-center text-2xl text-white hover:shadow-2xl bg-green-700 h-10 rounded-xs  hover:bg-green-800 focus:outline-2 focus:outline-offset-2 active:bg-green-900">
            <button> + Add to cart</button>
          </div>
        </div>
        <p className="text-sm text-pink-700 mt-2">Only 3 left in stock!</p>
        <Link
          to="/"
          className="text-blue-600 underline mb-4 inline-block hover:text-blue-800"
        >
          ← Back to Products
        </Link>
      </div>
    </div>
  );
};

export default Preview;
