import React from "react";
import "./Table.css";
import TableRow from "./tableRow/TableRow";

const Table = ({ products }) => {
  return (
    <div className="table">
      <h2 className="title">Comparative Analysis</h2>
      <table>
        <thead className="tableHead">
          <tr className="head">
            <th className="name">Nombre</th>
            <th className="sku">SKU</th>
            <th className="pres">%Presencia</th>
            <th className="price">Av.Price</th>
            <th className="pos">Av.Position</th>
          </tr>
        </thead>
        <tbody className="tableBody">
          {products.map((product, index) => (
            <TableRow
              key={index}
              name={product.name}
              sku={product.sku}
              price={product.averagePrice.toFixed(2)}
              presence={product.persistence * 100}
              position={product.averagePosition}
              img={product.productImage}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
