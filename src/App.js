import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import Home from './home/Home';
import CreateAccount from './create-account/CreateAccount';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Suspense App</h1>
        </header>
        <section className="App-content">
          <Switch>
              <Route path="/create">
                <CreateAccount/>
              </Route>
              <Route path="/">
                <Home/>
              </Route>
          </Switch>
        </section>
        <footer className="App-footer">
          React Ottawa February 2020
        </footer>
      </div>
    </Router>
  );
}

export default App;
