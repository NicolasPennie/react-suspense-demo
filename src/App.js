import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import Home from './home/Home';
import ErrorBoundry from './error-boundry/ErrorBoundry';
import Users from './users/Users';

const CreateAccount = React.lazy(() => import('./create-account/CreateAccount'));

function App() {
  return (
    <Router>
        <div className="App">
          <header className="App-header">
            <h1>Suspense App</h1>
          </header>
          <section className="App-content">
            <ErrorBoundry>
              <Switch>
                <Route path="/create">
                  <Suspense fallback={<span>loading...</span>}>
                    <CreateAccount/>
                  </Suspense>
                </Route>
                <Route path="/users">
                  <Users/>
                </Route>
                <Route path="/">
                  <Home/>
                </Route>
              </Switch>
            </ErrorBoundry>
          </section>
          <footer className="App-footer">
            React Ottawa February 2020
          </footer>
        </div>
      </Router>
  );
}

export default App;
