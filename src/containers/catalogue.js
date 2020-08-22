import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Catalogue = props => {
  const { bikes, user } = props;

  return (
    <div id="catalogue">
      <h1>Welcome back, {user}!</h1>

      {bikes.map(bike => (
        <div className="category-element" key={bike.model}>
          <ul>
            <li><h2 onClick={() => window.location.href = (`/bike/${bike.model}`)}>{bike.model}</h2></li>
            <li><p>{bike.description}</p></li>
          </ul>
        </div>
      ))}
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
