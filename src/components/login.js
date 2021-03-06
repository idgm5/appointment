import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { faSearch, faBars } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NEW_USER, NEW_BIKE } from '../actions/index';

const Login = props => {
  const { addUser, history, addBikes } = props;
  const handleSubmit = event => {
    event.preventDefault();
    addUser(event.target.user.value);
    history.push((`/${event.target.user.value}/catalogue`));
  };

  useEffect(() => {
    fetch('https://vespa-backend.herokuapp.com/api/v1/bikes')
      .then(res => res.json())
      .then(
        result => {
          result.map(bike => addBikes(bike));
        },
      );
  // eslint-disable-next-line
  }, []);

  return (
    <div className="login">
      <div className="login-icons">
        <div>
          <FontAwesomeIcon icon={faBars} id="icon-bars" />
          <span>
            <FontAwesomeIcon icon={faSearch} id="icon-loop" />
          </span>
        </div>
      </div>
      <form id="loginForm" name="loginForm" onSubmit={handleSubmit}>
        <h1>The new vespa trident</h1>
        <div>
          <input type="text" id="userInput" name="user" placeholder="enter a username" pattern="[^\s]+" title="Don't use spaces" />
          <input type="submit" value="Login" id="submitBtn" />
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addUser: user => {
    dispatch(NEW_USER(user));
  },
  addBikes: bike => {
    dispatch(NEW_BIKE(bike));
  },
});

Login.propTypes = {
  addUser: PropTypes.func.isRequired,
  addBikes: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect(null, mapDispatchToProps)(withRouter(Login));
