import React from "react";

function ProductRow({ data }) {

  const stylesDefault = {
    display: "inline-block",
    width: "49%",
    lineHeight: "3",
    fontSize: "1.5em",
    borderBottom: "2px solid #00ddcc"
  },
    notInStocke = {
      color: "red"
    }

  return (
    <>
      {data.map((item, index) =>
        <tr key={index}>

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