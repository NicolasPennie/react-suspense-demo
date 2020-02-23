import React from 'react';
import './Home.css';
import { Link, useHistory } from 'react-router-dom';

function Home() {
  const history = useHistory();

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
        <button className="Home-login" type="button" onClick={() => history.push('/user')}>
          Login
        </button>
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
