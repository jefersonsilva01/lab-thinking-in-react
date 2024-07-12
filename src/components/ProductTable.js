import React from "react";
import ProductRow from './ProductRow';

function ProductTable({ data }) {
  return (
    <>
      <table
        style={
          {
            margin: "48px auto 0",
            width: "95%",
            padding: "0"
          }
        }>
        <thead
          style={
            {
              backgroundColor: "#00ddcc",
              height: "44px"
            }
          }>
          <tr>
            <td
              style={
                {
                  display: "inline-block",
                  width: "45%",
                  lineHeight: "3",
                  fontSize: "1.5em",
                }
              }>Name</td>
            <td
              style={
                {
                  display: "inline-block",
                  width: "45%",
                  lineHeight: "3",
                  fontSize: "1.5em",
                }
              }>Price</td>
          </tr>
        </thead>
        <tbody>
          <ProductRow data={data} />
        </tbody>
      </table>
    </>
  )
}

export default ProductTable