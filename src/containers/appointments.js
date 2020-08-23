import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Appointments = props => {
  const { appointments, user } = props;
  let appointmentId = 0;

  function isLoggedIn() {
    if (user === "default") {
      return (
        <a href="/">You're not signed in, please login with your username in order to view this page.</a>
      );
    }
    return (
      <div id="list-appointments">
      <h2>Hello {user}, you have the current appointments: </h2>
      {appointments.filter(data => data.user === user ).map(data => (
              <div className="appointment-element" key={data.model}>
              <ul>
                <li><h3>Id: #{appointmentId += 1}</h3></li>
                <li><h3>Model: {data.model}</h3></li>
                <li><h3>City: {data.city}</h3></li>
                <li><h3>Date: {data.date}</h3></li>
              </ul>
              </div>
      ))}
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
