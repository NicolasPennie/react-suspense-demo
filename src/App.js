import React, { Suspense } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';

import './App.css';
import Home from './components/home/Home';
import ErrorBoundry from './components/error-boundry/ErrorBoundry';
import User from './components/user/User';

const CreateAccount = React.lazy(() => import('./components/create-account/CreateAccount'));

function App() {
  const history = useHistory();
  const goTo = (route) => history.push(route);

  return (
    <div className="App">
      <header className="App-header">
        <h1 onClick={() => goTo('/')}>
          Suspense App
        </h1>
      </header>
      <section className="App-content">
        <ErrorBoundry>
          <Switch>
            <Route path="/create">
              <Suspense fallback={<span>loading...</span>}>
                <CreateAccount/>
              </Suspense>
            </Route>
            <Route path="/user">
              <User/>
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
  );
}

export default App;
