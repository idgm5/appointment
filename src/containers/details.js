import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { NEW_APPOINTMENT } from '../actions/index';

const Details = props => {
  const { bikes, user, addAppointment} = props;
  const [currentCity, setCity] = useState({city: "Mexico City"});
  const { model } = props.match.params;
  const cities = ['Mexico City', 'Mérida', 'New York', 'London', 'Madrid', 'Río de Janeiro', 'Buenos Aires', 'Lima', 'Santiago', 'Abuya'];

  const handleChange = (event, field) => {
    setCity({ [field]: event.target.value });
  }

  const handleSubmit = event => {
    event.preventDefault();
    const appointment = {
      user: event.target.username.value,
      model: event.target.model.value,
      city: currentCity.city,
      date: event.target.date.value,
    };
    addAppointment(appointment);
  }

  function isLoggedIn() {
    if (user === "default") {
      return (
        <a href="/">You're not signed in, please login with your username in order to view this page.</a>
      );
    }
    return (bikes.filter(bike => bike.model === model ).map(bike => (
      <div className="details-element" key={bike.model}>
        <ul>
          <li><h2>{bike.model}</h2></li>
          <li><h3>Finance fees: ${bike.finance}</h3></li>
          <li><h3>Option to purchase fee: ${bike.option}</h3></li>
          <li><h3>Total ammount payable: ${bike.total}</h3></li>
          <li><h3>Duration: {bike.duration} months</h3></li>
        </ul>
        <form id="appointment" name="appointment" onSubmit={handleSubmit}>
          <h1>Would you like to make an appointment to try this bike?</h1>
          <div>
            <input type="hidden" id="username" name="username" value={user} />
            <input type="hidden" id="model" name="model" value={bike.model}/>
            <select name="cityName" id="cityName" onChange={event => handleChange(event, 'city')}>
              { cities.map(city => (
                <option key={city} value={city}>{ city }</option>
              )) }
            </select>
            <input type="date" id="start" name="date" min="2020-08-01" max="2021-12-31" />
            <input type="submit" value="Make appointment" id="submitBtn" />
          </div>
        </form>
      </div>
    )));
  }

  return (
    <div id="details-page">
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

Details.propTypes = {
  bikes: PropTypes.array.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Details));
