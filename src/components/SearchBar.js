import React from 'react';

function SearchBar(props) {

  const handleSearch = e => {
    e.preventDefault()
    props.searchProd(e.target.value)
  },

    handleCheck = e => {
      // e.preventDefault()
      console.log(e.target.checked)
      e.target.checked
        ? props.checkProd(true)
        : props.checkProd(false)
    }

  return (
    <>
      <p>Search</p>
      <input
        onChange={(e) => { handleSearch(e) }}
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
        onChange={(e) => { handleCheck(e) }}
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