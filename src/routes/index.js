import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../components/home/home';
import Contact from '../components/contact/contact';
import NotFound from '../components/404/404';
import Portfolio from '../components/portfolio/index';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/contact" exact component={Contact} />
      <Route path="/portfolio" exact component={Portfolio} />
      <Route component={NotFound} />
    </Switch>
  );
}
