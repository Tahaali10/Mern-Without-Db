import { Grid } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const [productData, setProductData] = useState(null);
  const { productid } = useParams(); 

  const getProduct = async () => {
    try {
      console.log("Getting Data From Backend");
      const response = await axios.get(`http://localhost:8000/${productid}`);
      const ProductData = response.data;
      console.log("Product Data: ", ProductData);
      setProductData(ProductData);
    } catch (error) {
      console.log("Error finding Product", error);
    } 
  };

  useEffect(() => {
    getProduct();
  }, [productid]);

  return (
    <div>
      {productData && (
        <Grid container spacing={2}>
          <Grid item xs={6} md={8}>
            <img  src={productData.productImage}
            alt=""
            height={500}
            width={500} />
          </Grid>
          <Grid item xs={6} md={4}>
            <div className="product-detail">
              <h4 className="product-detail-name">{productData.productName}</h4>
              <p className="product-detail-desc">{productData.productDesc}</p>
              <p className="product-detail-color">{productData.productColor}</p>
              <p className="product-detail-size">{productData.productSize}</p>
              <h5 className="product-detail-price">Rs. {productData.productPrice}</h5>
            </div>
          </Grid>
        </Grid>
      )}
    </div>
  );
};

export default ProductDetail;
