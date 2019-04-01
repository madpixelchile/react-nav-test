import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'

import { About, Contacts } from '../';

class Container extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path='/about' component={About}/>
          <Route path='/contacts' component={Contacts}/>
        </Switch>
      </div>
    );
  }
}

export default Container;