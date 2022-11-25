import React from 'react';
import { Route } from 'react-router-dom';
import Home from './containers/Home/Home';

export default function Router(): React.ReactElement {
  return (
    <>
      <Route exact path="/" component={Home} />
    </>
  );
}
