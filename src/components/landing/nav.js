import React, { useState } from 'react';
import icons from '../../assets/icons';

export default function Nav() {
  let [isActive, setIsActive] = useState(false);

  function handleClass() {
    setIsActive((current) => !current);
  }

  return (
    <nav>
      <div
        id={isActive ? 'menu-button-active' : 'menu-button-inactive'}
        onClick={handleClass}
      >
        {icons.menuButton}
      </div>
    </nav>
  );
}
