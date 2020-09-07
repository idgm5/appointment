/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-return-assign */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF, faGoogle, faTwitter, faPinterest, faVk,
} from '@fortawesome/free-brands-svg-icons';
import { NEW_APPOINTMENT } from '../actions/index';

const _ = require('lodash');

const Appointments = props => {
  const {
    appointments, user, history, addAppointment,
  } = props;
  let appointmentId = 0;

  useEffect(() => {
    fetch('https://vespa-backend.herokuapp.com/api/v1/appointments')
      .then(res => res.json())
      .then(
        result => {
          result.map(appointment => addAppointment(appointment));
        },
      );
  // eslint-disable-next-line
  }, []);

  const unique = _.uniqWith(appointments, _.isEqual);

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
            <span onClick={() => window.location.reload()}>Log Out</span>
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
        <div id="list-appointments">
          <h2>Appointments</h2>
          <ul className="table-desktop">
            <li><h3>Id</h3></li>
            <li><h3>Model</h3></li>
            <li><h3>City</h3></li>
            <li><h3>Date</h3></li>
          </ul>
          {unique.filter(data => data.user === user).map(data => (
            <ul key={data.id}>
              <li className="lightgray">
                <h3>
                  #
                  {appointmentId += 1}
                </h3>
              </li>
              <li className="lightgray"><h3>{data.model}</h3></li>
              <li className="lightgray"><h3>{data.city}</h3></li>
              <li className="lightgray"><h3>{data.date}</h3></li>
            </ul>
          ))}
        </div>
      </div>
    );
  }
  return (
    <div id="appointments">
      {isLoggedIn()}
    </div>
  );
};

const mapStateToProps = state => ({
  appointments: state.appointments,
  user: state.user,
});

const mapDispatchToProps = dispatch => ({
  addAppointment: appointment => {
    dispatch(NEW_APPOINTMENT(appointment));
  },
});

Appointments.propTypes = {
  appointments: PropTypes.array.isRequired,
  user: PropTypes.string.isRequired,
  addAppointment: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Appointments);
