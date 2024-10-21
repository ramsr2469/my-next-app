import React from "react";
import ProductTable from "./ProductTable";
interface Props {
  searchParams: { searchQuery: string };
}
const Products = ({ searchParams: { searchQuery } }: Props) => {
  return (
    <>
      <ProductTable searchQuery={searchQuery} />
    </>
  );
};

export default Products;
