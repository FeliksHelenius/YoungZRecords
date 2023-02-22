import React, { useState, useEffect } from 'react';
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
  let [isActive, setIsActive] = useState(false);
  let [selectedItem, setSelectedItem] = useState(null);
  useEffect(() => {
    setSelectedItem((selectedItem = products[count]));
  });

  function handleClick(element) {
    if (element.currentTarget.className === 'forward-button' && count < 3) {
      setCount(count + 1);
    } else if (element.currentTarget.className === 'back-button' && count > 0) {
      setCount(count - 1);
    }
    if (element.currentTarget.className === 'buy-button') {
      setIsActive((current) => !current);
    }
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
        <div className="buy-button" onClick={handleClick.bind(this)}>
          BUY
        </div>
      </div>
      <div className={isActive ? 'checkout open' : 'checkout closed'}>
        <div className="buy-section">
          <p>{selectedItem}</p>
        </div>
      </div>
    </div>
  );
}
