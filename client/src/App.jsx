import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/product-detail/:productid" element={<ProductDetail />} />
          {/* Use :productid instead of {productid} */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
