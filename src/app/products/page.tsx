import React from "react";
import Filters from "./components/Filters";
import ProductGrid from "./components/ProductGrid";

const page = () => {
  return (
    <div>
      <Filters />
      <div>
        <ProductGrid />
      </div>
    </div>
  );
};

export default page;
