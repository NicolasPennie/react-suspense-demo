import React, { Suspense } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';

import './App.css';
import Home from './components/home/Home';
import ErrorBoundry from './components/error-boundry/ErrorBoundry';

const CreateAccount = React.lazy(() => import('./components/create-account/CreateAccount'));
const User = React.lazy(() => import('./components/user/User'));

function App() {
  const history = useHistory();
  const goTo = (route) => history.push(route);

  return (
    <div className="App">
      <ErrorBoundry>
        <header className="App-header">
            <h1 onClick={() => goTo('/')}>
              Suspense App
            </h1>
        </header>
        <section className="App-content">
          <Suspense fallback={<span>loading...</span>}>
            <Switch>
              <Route path="/create">
                  <CreateAccount/>
              </Route>
              <Route path="/user">
                <User/>
              </Route>
              <Route path="/">
                <Home/>
              </Route>
            </Switch>
          </Suspense>
        </section>
        <footer className="App-footer">
          React Ottawa February 2020
        </footer>
      </ErrorBoundry>
    </div>
  );
}

export default App;
