import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Catalogue = props => {
  const { bikes, user, history } = props;

  function isLoggedIn() {
    if (user === "default") {
      return (
        <a href="/">You're not signed in, please login with your username in order to view this page.</a>
      );
    }
    return (bikes.map(bike => (
              <div className="category-element" key={bike.model}>
                <ul>
                  <li><h2 onClick={() => history.push((`/bike/${bike.model}`))}>{bike.model}</h2></li>
                  <li><p>{bike.description}</p></li>
                </ul>
              </div>
            )));
  }
  return (
    <div id="catalogue">
      {isLoggedIn()}
    </div>
  );
};

const mapStateToProps = state => ({
  bikes: state.bikes,
  user: state.user,
});

Catalogue.propTypes = {
  bikes: PropTypes.array.isRequired,
  user: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Catalogue);
