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
          <tr style={
            {
              display: "flex",
              justifyContent: "space-evenly",
              borderBottom: "2px solid #00ddcc",

            }
          }>
            <td
              style={
                {
                  display: "inline-block",
                  width: "15%",
                  lineHeight: "3",
                  fontSize: "1.5em",
                  "textAlign": "left",
                }
              }>Name</td>
            <td
              style={
                {
                  display: "inline-block",
                  width: "15%",
                  lineHeight: "3",
                  fontSize: "1.5em",
                  "textAlign": "left",
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