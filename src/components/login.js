import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { NEW_USER } from '../actions/index';

const Login = props => {
  const handleSubmit = event => {
    const { addUser } = props;
    event.preventDefault();
    addUser(event.target.user.value);
    props.history.push((`/${event.target.user.value}/catalogue`));
  };

  return (
    <form id="loginForm" name="loginForm" onSubmit={handleSubmit}>
      <h1>The new vespa trident</h1>
      <div>
        <input type="text" id="userInput" name="user" placeholder="Enter a valid username." pattern="[^\s]+" title="Don't use spaces" />
        <input type="submit" value="Login" id="submitBtn" />
      </div>
    </form>
  );
};

const mapDispatchToProps = dispatch => ({
  addUser: user => {
    dispatch(NEW_USER(user));
  },
});

Login.propTypes = {
  addUser: PropTypes.func.isRequired,
  history: PropTypes.any.isRequired,
};

export default connect(null, mapDispatchToProps)(withRouter(Login));
