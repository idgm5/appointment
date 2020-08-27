import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './login';
import Catalogue from '../containers/catalogue';
import Details from '../containers/details';
import Appointments from '../containers/appointments';

function App() {
  return (
    <div className="App container">
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/:user/catalogue" component={Catalogue} />
        <Route exact path="/bike/:model" component={Details} />
        <Route exact path="/appointments" component={Appointments} />
      </Switch>
    </div>
  );
}

export default App;
