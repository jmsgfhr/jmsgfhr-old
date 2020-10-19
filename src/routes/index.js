import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../components/home/home';
import Contact from '../components/contact/contact';
import NotFound from '../components/404/404';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/contact" exact component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}
