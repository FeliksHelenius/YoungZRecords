import React from 'react';
import icons from '../../assets/icons';
import { Link } from 'react-router-dom';
export default function NavTop(item) {
  return (
    <nav id="nav-top">
      <Link to={'/'}>{icons.homeButton}</Link>
      Young Z Records
    </nav>
  );
}
