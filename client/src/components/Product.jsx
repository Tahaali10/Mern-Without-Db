import axios from "axios";
import { useEffect, useState } from "react";

const Product = () => {
  const [productData, setProductData] = useState(null);

  const getProduct = async () => {
    try {
      console.log("Getting Data From Backend");
      const response = await axios.get("http://localhost:8000/");
      const ProductData = response.data;
      console.log("Product Data: ", ProductData);
      setProductData(ProductData);
    } catch (error) {
      console.log("Error finding Product", error);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div className="main-product">
      {productData &&
        productData.map((product) => (
          <div key={product.productId} className="paper">
            <div className="paper-img">
              <img
                src={product.productImage}
                alt=""
                height={100}
                width={120}
              />
            </div>
            <h4 className="paper-product">{product.productName}</h4>
            <p className="paper-product-desc">{product.productSize}</p>
            <p className="paper-product-color">{product.productColor}</p>
            <h5 className="paper-price-heading">Rs. {product.productPrice}</h5>
            <a href={`/product-detail/${product.productId}`}>View Details</a>
          </div>
        ))}
    </div>
  );
};

export default Product;
