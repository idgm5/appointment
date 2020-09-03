/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-return-assign */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF, faGoogle, faTwitter, faPinterest, faVk,
} from '@fortawesome/free-brands-svg-icons';
import { NEW_APPOINTMENT } from '../actions/index';

const Catalogue = props => {
  const { bikes, user, history, addAppointment} = props;

  useEffect(() => {
    fetch(`https://vespa-backend.herokuapp.com/api/v1/appointments`)
      .then(res => res.json())
      .then(
        result => {
          result.map(appointment => addAppointment(appointment));
        },
      );
  // eslint-disable-next-line
  }, []);

  function isLoggedIn() {
    if (user === 'default') {
      return (
        <div className="back-login">
          <a href="/" id="back-login">You are not signed in, please login with your username in order to view this page.</a>
        </div>
      );
    }
    return (
      <div className="menu">
        <div className="sidebar">
          <div className="sidebar-links">
            <h1>Scespa</h1>
            <span onClick={() => history.push((`/${user}/catalogue`))}>Models</span>
            <span>Lifestyle</span>
            <span>Shop</span>
            <span onClick={() => history.push(('/appointments'))}>Test Drive</span>
          </div>
          <div className="social-icons">
            <FontAwesomeIcon icon={faTwitter} id="social-icon" />
            <FontAwesomeIcon icon={faGoogle} id="social-icon" />
            <FontAwesomeIcon icon={faFacebookF} id="social-icon" />
            <FontAwesomeIcon icon={faPinterest} id="social-icon" />
            <FontAwesomeIcon icon={faVk} id="social-icon" />
            <p>© 2020 Isaac González</p>
          </div>
        </div>
        <div className="menu-bikes">
          <h1>Latest Models</h1>
          <h3>Please select a Vespa Model</h3>
          <div className="bikes">
            {bikes.map(bike => (
              <div className="catalogue-element" key={bike.modelName}>
                <ul>
                  <li id="picture-background"><img src={bike.picture} alt="vespa-bike" onClick={() => history.push((`/bike/${bike.modelName}`))} /></li>
                  <li><h2 onClick={() => history.push((`/bike/${bike.modelName}`))}>{bike.modelName}</h2></li>
                  <li><p>{bike.description}</p></li>
                  <li id="bikes-social">
                    <FontAwesomeIcon icon={faTwitter} id="social-icon" />
                    <FontAwesomeIcon icon={faGoogle} id="social-icon" />
                    <FontAwesomeIcon icon={faPinterest} id="social-icon" />
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
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

const mapDispatchToProps = dispatch => ({
  addAppointment: appointment => {
    dispatch(NEW_APPOINTMENT(appointment));
  },
});

Catalogue.propTypes = {
  bikes: PropTypes.array.isRequired,
  user: PropTypes.string.isRequired,
  addAppointment: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Catalogue);
