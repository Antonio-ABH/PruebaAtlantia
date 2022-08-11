import React from "react";
import "./TableRow.css";

const TableRow = ({ name, sku, presence, price, position, img }) => {
  return (
    <>
      {presence < 0 ? (
        <tr style={{ background: "#E9E9E9" }} className="rowProduct">
          <td className="imageProduct">
            <img src={img} alt="imageProduct" />
          </td>
          <td className="name prod1">{name}</td>
          <td className="sku prod">{sku}</td>
          <td style={{ color: "#D6215B" }} className="pres prod">
            {Math.abs(presence)}%
          </td>
          <td className="price prod">${price}</td>
          <td className="pos prod">{position}</td>
        </tr>
      ) : (
        <tr className="rowProduct">
          <td className="imageProduct">
            <img src={img} alt="imageProduct" />
          </td>
          <td className="name prod1">{name}</td>
          <td className="sku prod">{sku}</td>
          <td style={{ color: "#23B794" }} className="pres prod">
            {Math.abs(presence)}%
          </td>
          <td className="price prod">${price}</td>
          <td className="pos prod">{position}</td>
        </tr>
      )}
    </>
  );
};

export default TableRow;
