import React from 'react';
import Nav from '../components/landing/nav';
import PreviewWork from '../components/landing/previewWork';
import { Fragment } from 'react';
import '../assets/styles/mainStyle.scss';

export default function Landing() {
  return (
    <Fragment>
      <Nav />
      <PreviewWork />
    </Fragment>
  );
}
