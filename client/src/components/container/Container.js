import React, { useState, useEffect } from "react";
import "./Container.css";
import Table from "../table/Table";
import PriceGraph from "../price/PriceGraph";
import PresenceGraph from "../presence/PresenceGraph";

const Container = () => {
  const [products, setProducts] = useState([]);
  const [evolution, setEvolution] = useState([]);
  const [presence, setPresence] = useState([]);

  //We call data from API

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      });

    fetch("http://localhost:5000/api/prices")
      .then((response) => response.json())
      .then((data) => {
        setEvolution(data);
      });

    fetch("http://localhost:5000/api/presence")
      .then((response) => response.json())
      .then((data) => {
        setPresence(data);
      });
  }, []);

  return (
    <main className="container">
      <h1 className="principalText">General Performance Analysis</h1>
      <h2 className="principalText priceTitle">Price Evolution</h2>
      <PriceGraph evolution={evolution} />
      <h2 className="presenceTitle">Presence Share by Product</h2>
      <PresenceGraph presence={presence} />
      <Table products={products} />
    </main>
  );
};

export default Container;
