import React, { useState } from 'react';
import icons from '../../assets/icons';
import GunStore from './products/gunStore';
import PhoneSystem from './products/phoneSystem';
import MapBuild from './products/mapBuild';
import MainMenuSystem from './products/mainMenuSystem';

let products = [
  <GunStore />,
  <PhoneSystem />,
  <MapBuild />,
  <MainMenuSystem />,
];

export default function PreviewWork() {
  let [count, setCount] = useState(0);

  function handleClick(element) {
    if (element.currentTarget.className === 'forward-button' && count < 3) {
      setCount(count + 1);
    } else if (element.currentTarget.className === 'back-button' && count > 0) {
      setCount(count - 1);
    }
    if (element.currentTarget.className === 'buy-button') {
      return;
    }
    console.log(count, element.currentTarget.className);
  }
  return (
    <div id="preview-work">
      <div className="container-cover"></div>
      <div id="product-container">
        <div id="product">{products[count]}</div>
        <div className="back-button" onClick={handleClick.bind(this)}>
          {icons.leftArrow}
        </div>
        <div className="forward-button" onClick={handleClick.bind(this)}>
          {icons.rightArrow}
        </div>
        <button className="buy-button" onClick={handleClick.bind(this)}>
          Buy
        </button>
      </div>
    </div>
  );
}
