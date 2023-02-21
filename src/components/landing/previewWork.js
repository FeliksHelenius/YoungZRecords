import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import GunStore from './products/gunStore';
import PhoneSystem from './products/phoneSystem';
import MapBuild from './products/mapBuild';

let products = [<GunStore />, <PhoneSystem />, <MapBuild />];

export default function PreviewWork() {
  const [count, setCount] = useState(0);
  function handleClick(direction) {
    console.log(direction.target.className);
  }
  return (
    <div id="preview-work">
      <div className="container-cover"></div>
      <div id="product-container">
        <div id="product">{products[count]}</div>
        <button
          className="back-button"
          onClick={handleClick.bind(this)}
        ></button>
        <button
          className="forward-button"
          onClick={handleClick.bind(this)}
        ></button>
        <button className="buy-button">Buy</button>
      </div>
    </div>
  );
}
