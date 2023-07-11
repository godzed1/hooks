import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import "./App.css";

function App() {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [product1, setProduct1] = useState(60000);
  const [product2, setProduct2] = useState(100000);
  const [product3, setProduct3] = useState(600000);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div>
        <h3>จำนวนสินค้าในตะกร้า {totalItems}</h3>
        <h3>ราคาสินค้าทั้งหมด {totalPrice} USD</h3>
      </div>
      <div>
        <img scr="gr-yaris.jpg" alt="gryaris" width="15%" />
        <br />
        Toyota GR Yaris {product1} USD
      </div>
      <button
        onClick={() => {
          setTotalItems(totalItems + 1);
          setTotalPrice(totalPrice + product1);
        }}
      >
        Add to cart
      </button>
      <button
        onClick={() => {
          setTotalItems(totalItems - 1);
          setTotalPrice(totalPrice - product1);
        }}
      >
        Remove from cart
      </button>
      <div>
        <img scr="supra-grmn.jpg" alt="grsupra" width="15%" />
        <br />
        Toyota GR Supra {product2} USD
      </div>
      <button
        onClick={() => {
          setTotalItems(totalItems + 1);
          setTotalPrice(totalPrice + product1);
        }}
      >
        Add to cart
      </button>
      <button
        onClick={() => {
          setTotalItems(totalItems - 1);
          setTotalPrice(totalPrice - product1);
        }}
      >
        Remove from cart
      </button>
      <div>
        <img scr="900-rocket-r.jpg" alt="bb911" width="15%" />
        <br />
        BRABUS 900 Rocket R {product3} USD
      </div>
      <button
        onClick={() => {
          setTotalItems(totalItems + 1);
          setTotalPrice(totalPrice + product1);
        }}
      >
        Add to cart
      </button>
      <button
        onClick={() => {
          setTotalItems(totalItems - 1);
          setTotalPrice(totalPrice - product1);
        }}
      >
        Remove from cart
      </button>
    </div>
  );
}
