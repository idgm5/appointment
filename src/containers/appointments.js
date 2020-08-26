import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebookF, faGoogle, faTwitter, faPinterest, faVk} from "@fortawesome/free-brands-svg-icons";

const Appointments = props => {
  const { appointments, user } = props;
  let appointmentId = 0;

  function isLoggedIn() {
    if (user === "default") {
      return (
        <div className="back-login">
          <a href="/" id="back-login">You're not signed in, please login with your username in order to view this page.</a>
        </div>
        );
    }
    return (
      <div className="menu">
      <div className="sidebar">
        <div className="sidebar-links">
          <h1>Scespa</h1>
          <a href="#">Models</a>
          <a href="#">Lifestyle</a>
          <a href="#">Shop</a>
          <a href="#">Test Drive</a>
        </div>
        <div className="social-icons">
          <FontAwesomeIcon icon={faTwitter} id="social-icon"/>
          <FontAwesomeIcon icon={faGoogle} id="social-icon"/>
          <FontAwesomeIcon icon={faFacebookF} id="social-icon"/>
          <FontAwesomeIcon icon={faPinterest} id="social-icon"/>
          <FontAwesomeIcon icon={faVk} id="social-icon"/>
          <p>© 2020 Isaac González</p>
        </div>
      </div>
      <div id="list-appointments">
      <h2>Appointments</h2>
      <ul id="table">
      <li><h3>Id</h3></li>
      <li><h3>Model</h3></li>
      <li><h3>City</h3></li>
      <li><h3>Date</h3></li>
      </ul>
      {appointments.filter(data => data.user === user ).map(data => (
              <ul id={data.model}>
                <li className="lightgray"><h3>#{appointmentId += 1}</h3></li>
                <li className="lightgray"><h3>{data.model}</h3></li>
                <li className="lightgray"><h3>{data.city}</h3></li>
                <li className="lightgray"><h3>{data.date}</h3></li>
              </ul>
      ))}
      </div>
    </div>);
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

Appointments.propTypes = {
  appointments: PropTypes.array.isRequired,
  user: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Appointments);
