import { Route, Routes } from "react-router";
import { useEffect, useState } from "react";

import CategoriesPreview from "../CategoriesPreview/CategoreisPreview";
import Category from "../Category/Category";
import "./shop.style.scss";
import { getCategoriesAndDocuments } from "../../utils/firebase.utils";
import { fetchCategoriesAsync } from "../../store/categories/categories.action";
import { useDispatch } from "react-redux";

const Shop = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    dispatch(fetchCategoriesAsync());
  }, []);

  return (
    <div style={{ position: "relative", minHeight: "60vh" }}>
      {isLoading ? (
        <div className="loader-container">
          <div className="loader" />
          <p>Loading products...</p>
        </div>
      ) : (
        <Routes>
          <Route index element={<CategoriesPreview />} />
          <Route path=":category" element={<Category />} />
        </Routes>
      )}
    </div>
  );
};

export default Shop;
