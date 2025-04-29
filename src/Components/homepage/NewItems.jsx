import React, { useEffect, useState } from "react";
import assur from "../../assets/assured.png";

const NewItems = () => {
  const [products, setProducts] = useState([]);

  const trimText = (text, maxLength = 23) => {
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  };

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=20")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Failed to fetch products:", err));
  }, []);

  if (products.length === 0) {
    return <p className="text-center text-gray-600">Loading products...</p>;
  }

  return (
    <div className="grid grid-cols-5 gap-3 pl-20 pr-20 bg-gray-200 pb-3">
      {products.map((product) => (
        <div
          key={product.id}
          className=" bg-white rounded-lg pt-1 p-6 shadow-xl"
        >
          <div className="grid grid-cols-1 justify-center">
            <img
              className="h-40 w-full object-contain"
              src={product.image}
              alt={product.title}
            />

            <h3>{trimText(product.title)}</h3>
            <p className="text-xs text-gray-500">color</p>
            <div className="flex gap-3 h-5 pt-1">
              <p className="bg-green-800 w-9 h-6 rounded-sm text-white text-center ">
                5 &#9733;
              </p>
              <p className="text-sm text-gray-500 font-medium">(706)</p>
              <img className="pt-1s" src={assur} />
            </div>
            <div className="flex gap-4 mt-2">
              <p className="text-[16px]">₹{Math.floor(product.price * 80)}</p>
              <p className="text-[16px] text-gray-500 line-through">
                ₹{Math.floor(product.price * 80) + 1560}
              </p>
              <p className="text-[16px] text-green-800">56% off</p>
            </div>
            <p className="text-[12px] font-medium mt-1">Free Delivery</p>
            <p className="text-[12px] font-medium mt-1 text-pink-800">
              Only 3 left
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewItems;
