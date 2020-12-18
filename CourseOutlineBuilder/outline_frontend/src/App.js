import React from 'react';


import Outline from './Outline';
import Dashboard from './Dashboard';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {

  return (

    <Router>
      <div className="App">
        <div>
          <Switch>
            <Route path='/outline' component={Outline} />
            <Route path='/' exact component={Dashboard} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
