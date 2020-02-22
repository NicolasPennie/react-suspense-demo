import React from 'react';
import { Link } from 'react-router-dom';

import './CreateAccount.css';

function CreateAccount() {
  return (
    <React.Fragment>
        <h4>Create a new account!</h4>
        <form className="Create-form">
            <label>
                Email
            <input type="email" name="email"/>
            </label>
            <label>
                Password
            <input type="password" name="password"/>
            </label>
            <button className="Create-submit">Submit</button>
        </form>
        <div className="Create-login">
            <span>
                Already have an account? &nbsp;
            </span>
            <Link to="/">Login here!</Link>
      </div>
    </React.Fragment>
  );
}

export default CreateAccount;
