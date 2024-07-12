// src/components/ProductsPage.js

import { useState } from 'react';
import jsonData from '../data.json';

import SearchBar from './SearchBar';
import ProductTable from "./ProductTable";

function ProductsPage() {
  const [products, setProducts] = useState(jsonData),

    search = inputProduct => {
      if (inputProduct.length === 0) return setProducts(jsonData)

      const productResults = [],
        newProd = [...products]

      newProd.map(item => {
        return item.name
          .toLowerCase()
          .includes(inputProduct.toLowerCase())
          && productResults.push(item);
      })

      productResults.length > 0
        ? setProducts(productResults)
        : setProducts([])
    },

    check = (event) => {
      if (!event) return setProducts(jsonData)

      const productResults = [],
        newProd = [...products]

      newProd.map(item => {
        return item.inStock && productResults.push(item);
      })

      productResults.length > 0
        ? setProducts(productResults)
        : setProducts([]);
    }

  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar checkProd={check} searchProd={search} />
      <ProductTable data={products} />
    </div>
  )
}

export default ProductsPage