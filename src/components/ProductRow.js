import React from "react";

function ProductRow({ data }) {

  const stylesDefault = {
    display: "inline-block",
    width: "15%",
    lineHeight: "3",
    fontSize: "1.5em",
    "textAlign": "left",
  },
    notInStocke = {
      color: "red"
    }

  return (
    <>
      {data.map((item, index) =>
        <tr key={index} style={
          {
            display: "flex",
            justifyContent: "space-evenly",
            borderBottom: "2px solid #00ddcc",

          }
        }>

          {!item.inStock
            ? <td style={{ ...stylesDefault, ...notInStocke }}>{item.name}</td>
            : <td style={stylesDefault}>{item.name}</td>
          }

          <td style={stylesDefault}>{item.price}</td>
        </tr>
      )}
    </>
  )
}

export default ProductRow;