import { assets } from "@/assets/assets";
import RelatedProduct from "@/components/RelatedProduct";
import { ShopContext } from "context/ShopContext";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [images, setImages] = useState("");
  const [size, setSize] = useState("");

  useEffect(() => {
    if (products?.length) {
      const product = products.find((item) => item._id === productId);
      if (product) {
        setProductData(product);
        setImages(product.images?.[0] || "");
      }
    }
  }, [productId, products]);

  if (!productData) {
    return <div>Loading...</div>; // Add loading state for undefined productData
  }

  return (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/* Product Data */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* Product Images */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productData.images?.length > 0 ? (
              productData.images.map((item, index) => (
                <img
                  onClick={() => setImages(item)}
                  src={item}
                  key={index}
                  alt={`Product image ${index + 1}`}
                  className="w-[24% sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
                />
              ))
            ) : (
              <p>No images available</p>
            )}
          </div>
          <div className="w-full sm:w-[80%]">
            <img className="w-full h-auto" src={images} alt="Main product" />
          </div>
        </div>
        {/* Product Info */}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
          <div className="flex items-start gap-1 mt-2">
            <img src={assets.star_icon} alt="Star" className="w-3.5" />
            <img src={assets.star_icon} alt="Star" className="w-3.5" />
            <img src={assets.star_icon} alt="Star" className="w-3.5" />
            <img src={assets.star_icon} alt="Star" className="w-3.5" />
            <img src={assets.star_dull_icon} alt="Dull star" className="w-3.5" />
            <p className="pl-2">(122)</p>
          </div>
          <p className="mt-5 text-3xl font-medium">
            {currency}
            {productData.price}
          </p>
          <p className="mt-5 text-gray-500 md:w-4/5">{productData.description}</p>
          <div className="flex flex-col gap-4 my-8">
            <p>Select Size</p>
            <div className="flex gap-2">
              {productData.sizes?.length > 0 ? (
                productData.sizes.map((item, index) => (
                  <button
                    onClick={() => setSize(item)}
                    className={`border bg-gray-100 py-2 px-4 ${
                      item === size ? "border-orange-500" : ""
                    }`}
                    key={index}
                  >
                    {item}
                  </button>
                ))
              ) : (
                <p className="text-gray-500">No sizes available</p>
              )}
            </div>
          </div>
          <button
            onClick={() => addToCart(productData._id, size)}
            className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700"
          >
            ADD TO CART
          </button>
          <hr className="mt-8 sm:w-4/5" />
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>100% Original Product.</p>
            <p>Cash on Delivery is available on this product.</p>
            <p>Easy returns and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>
      {/* Related Products */}
      <div className="mt-20">
        <div className="flex">
          <div>
            <b className="border px-5 py-3 text-sm">Description</b>
            <p className="border px-5 py-3 text-sm">Reviews</p>
          </div>
          <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem alias culpa illum.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore beatae quod dolor et sed sapiente excepturi sequi fugiat. Odio et ipsum unde eum!</p>
          </div>
        </div>
        <RelatedProduct
          category={productData.category}
          subCategory={productData.subCategory}
        />
      </div>
    </div>
  );
};

export default Product;
