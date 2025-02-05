import React, { useEffect } from "react";
import PrdHomeDetails from "../ProductHomeDetails/PrdHomeDetails";
import { Category } from "../ProductHomeDetails/Category";

const ProductHome = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <PrdHomeDetails />
      <Category />
    </div>
  );
};

export default ProductHome;
