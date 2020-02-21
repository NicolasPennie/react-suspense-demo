import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <React.Fragment>
      <form className="Home-login-form">
        <label>
          Email
          <input type="email" name="email"/>
        </label>
        <label>
          Password
          <input type="password" name="password"/>
        </label>
      </form>
      <div className="Home-create-account">
        <span>
          Don't have an account? &nbsp;
        </span>
        <Link to="/create">Create one now!</Link>
      </div>
    </React.Fragment>
  );
}

export default Home;
