import { Route, Routes } from "react-router";
import CategoriesPreview from "../CategoriesPreview/CategoreisPreview";
import "./shop.style.scss";
import Category from "../Category/Category";

const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
