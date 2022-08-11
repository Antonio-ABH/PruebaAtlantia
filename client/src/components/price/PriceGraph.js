import React from "react";
import Chart from "react-apexcharts";
import "./PriceGraph.css";

const PriceGraph = ({ evolution }) => {
  //We Get only dateExtraction element
  const extraction = evolution.map((element) => {
    return element.dateExtraction;
  });

  //We Delete repit data and get only one date by product
  const reduction = extraction.reduce((object, date) => {
    if (!object[date]) {
      object[date] = 1;
    } else {
      object[date] += 1;
    }
    return object;
  }, {});

  //We Get the keys from the Object conver to array
  const dates = Object.keys(reduction);

  //We convert type of the date
  const convert = dates.map((date) => {
    let check = new Date(date);
    const result = check.toDateString();

    return result;
  });

  //We Get only the data we need
  const dateFinal = convert.map((date) => {
    return date.slice(4, 11);
  });

  //We order data
  const orderDate = dateFinal.sort();

  //We get the name list
  const getName = evolution.map((element) => {
    return element.name;
  });

  //We delete repit data and get only one name by product
  const findName = getName.reduce((object, name) => {
    if (!object[name]) {
      object[name] = 1;
    } else {
      object[name] += 1;
    }
    return object;
  }, {});

  //We conver object to array and get the name
  const names = Object.keys(findName);

  //We filter by product
  const getAmbar = evolution
    .filter((sku) => sku.sku === "039430430493093")
    .map((product) => {
      return product.price;
    });

  //We filter by product
  const getTecate = evolution
    .filter((sku) => sku.sku === "019130421492023")
    .map((product) => {
      return product.price;
    });

  //We filter by product
  const getLager = evolution
    .filter((sku) => sku.sku === "149430221492023")
    .map((product) => {
      return product.price;
    });

  //We join the product with prices by product
  const priceFinal = [
    { name: names[0], data: getAmbar },
    { name: names[1], data: getTecate },
    { name: names[2], data: getLager },
  ];

  return (
    <article className="priceGraph">
      <div id="d3price">
        <Chart
          width={"200%"}
          options={{
            chart: {
              type: "line",
            },
            dataLabels: {
              enabled: false,
            },
            grid: {
              row: {
                colors: ["#f3f3f3", "transparent"],
                opacity: 0.5,
              },
            },
            stroke: {
              curve: "straight",
            },
            xaxis: {
              categories: orderDate,
            },
            yaxis: {
              labels: {
                formatter: (val) => {
                  return `$${val}`;
                },
              },
            },
            colors: ["#D6215B", "#7530B2", "#FFB448"],
          }}
          series={priceFinal}
        ></Chart>
      </div>
    </article>
  );
};

export default PriceGraph;
