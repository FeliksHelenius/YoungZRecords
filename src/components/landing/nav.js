import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import icons from '../../assets/icons';
import { Fragment } from 'react';

export default function Nav() {
  let [isActive, setIsActive] = useState(false);

  function handleClass() {
    setIsActive((current) => !current);
  }

  return (
    <Fragment>
      <nav id={isActive ? 'menu-active' : 'menu-inactive'}>
        <div className="contact-container">
          <Link to={'/contact'}>{icons.mail}</Link>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            {icons.youtube}
          </a>
          <a
            href="https://discordapp.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            {icons.discord}
          </a>
        </div>
      </nav>
      <div
        onClick={handleClass}
        className={isActive ? 'button closed' : 'button open'}
      >
        {icons.menuButton}
      </div>
    </Fragment>
  );
}
