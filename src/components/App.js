import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './login';
import Catalogue from '../containers/catalogue';
import Details from '../containers/details';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/:user/catalogue" component={Catalogue}/>
        <Route exact path="/bike/:model" component={Details}/>
      </Switch>
    </div>
  );
}

export default App;
