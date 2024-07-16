// src/components/ProductsPage.js

import { useState } from 'react';
import jsonData from '../data.json';

import SearchBar from './SearchBar';
import ProductTable from "./ProductTable";

function ProductsPage() {

  const [productsData, setProducts] = useState(
    {
      products: jsonData,
      inputSearch: '',
      inputCheck: false
    }
  ),

    change = newProdData => {
      let updateProducts

      newProdData.inputCheck
        ? updateProducts = newProdData.products
          .filter(prod => (prod.name.toLowerCase()
            .includes(newProdData.inputSearch.toLowerCase()) && prod.inStock) && prod)

        : updateProducts = newProdData.products
          .filter(prod => (prod.name.toLowerCase()
            .includes(newProdData.inputSearch.toLowerCase())) && prod);

      setProducts({ ...newProdData, products: updateProducts, });
    },

    filters = value => {
      typeof value === 'boolean'
        ? productsData.inputCheck = value
        : productsData.inputSearch = value;

      change({ ...productsData, products: jsonData });
    }

  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar filterProd={filters} />
      <ProductTable data={productsData.products} />
    </div>
  )
}

export default ProductsPage