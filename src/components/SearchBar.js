import React from 'react';

function SearchBar() {
  return (
    <>
      <p>Search</p>
      <input
        type="text"
        style={
          {
            display: "block",
            margin: "0 auto",
            width: "90%",
            height: "35px",
            border: "2px solid #0066ff",
            borderRadius: "4px",
            marginBottom: "16px"
          }
        } />
      <input
        type="checkbox"
        name="stock"
        id="stock"
        style={
          {
            width: "20px",
            height: "20px",
            display: "inline-block",
            verticalAlign: "middle",
          }
        } />
      <label
        style={
          {
            height: "100%",
            display: "inline-block",
            verticalAlign: "middle",
          }
        }
      >Only show products in stock</label>
    </>
  )
}

export default SearchBar