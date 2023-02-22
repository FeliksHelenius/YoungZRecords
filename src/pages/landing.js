import React from 'react';
import Nav from '../components/landing/nav';
import NavTop from '../components/landing/navTop';
import PreviewWork from '../components/landing/previewWork';
import { Fragment } from 'react';
import '../assets/styles/mainStylePhone.scss';

export default function Landing() {
  return (
    <Fragment>
      <NavTop />
      <Nav />
      <PreviewWork />
    </Fragment>
  );
}
