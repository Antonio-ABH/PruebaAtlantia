import React from "react";
import Chart from "react-apexcharts";
import "./PresenceGraph.css";

const PresenceGraph = ({ presence }) => {
  //We get product name
  const sProduct = presence.map((product) => {
    return product.name;
  });

  //we get presence by product
  const sPresence = presence.map((presen) => {
    return presen.presenceShare;
  });

  return (
    <article className="presenceGraph">
      <div id="d3presence">
        <Chart
          type="pie"
          width={500}
          height={500}
          series={sPresence}
          options={{
            colors: ["#D6215B", "#FF7A00", "#7530B2", "#23B794", "#006FFF"],
            labels: sProduct,
          }}
        ></Chart>
      </div>
    </article>
  );
};

export default PresenceGraph;
