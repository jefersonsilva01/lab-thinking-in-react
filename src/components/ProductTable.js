import React from "react";

function ProductTable() {
  return (
    <>
      <table
        style={
          {
            margin: "48px auto 0",
            width: "95%"
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
            <label
              style={
                {
                  verticalAlign: "middle",
                  display: "inline-block",
                  height: "100%",
                  width: "50%",
                  lineHeight: "3",
                  fontSize: "1.5em",
                }
              }>Name</label>
            <label
              style={
                {
                  verticalAlign: "middle",
                  display: "inline-block",
                  height: "100%",
                  width: "50%",
                  lineHeight: "3",
                  fontSize: "1.5em",
                }
              }>Price</label>
          </tr>
        </thead>
      </table>
    </>
  )
}

export default ProductTable