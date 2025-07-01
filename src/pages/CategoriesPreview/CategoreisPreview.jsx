import { Fragment, useContext } from "react";
import { ProductsContext } from "../../context/productContext";

import CategoryPreview from "../../components/CategoryPreview/CategoryPreview";

const CategoriesPreview = () => {
  const { products } = useContext(ProductsContext);

  return (
    <Fragment>
      {Object.keys(products).map((title) => {
        const product = products[title];
        return <CategoryPreview key={title} title={title} products={product} />;
      })}
    </Fragment>
  );
};

export default CategoriesPreview;
