import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Suspense App</h1>
      </header>
      <form className="App-login-form">
        <label>
          Email
          <input type="email" name="email"/>
        </label>
        <label>
          Password
          <input type="password" name="password"/>
        </label>
      </form>
      <footer class="create-account-footer">
        <span>
          Don't have an account? &nbsp;
        </span>
        <a href="./create" class="create-account-link">Create one now!</a>
      </footer>
    </div>
  );
}

export default App;
