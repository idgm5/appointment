import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { NEW_APPOINTMENT } from '../actions/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebookF, faGoogle, faTwitter, faPinterest, faVk} from "@fortawesome/free-brands-svg-icons";

const Details = props => {
  const { bikes, user, addAppointment, history} = props;
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
      date: event.target.date.value ? event.target.date.value : "2020-08-01",
    };
    addAppointment(appointment);
    history.push((`/appointments`));
  }

  function isLoggedIn() {
    if (user === "default") {
      return (
        <a href="/">You're not signed in, please login with your username in order to view this page.</a>
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
        {bikes.filter(bike => bike.model === model ).map(bike => (
        <div className="details-element" key={bike.model}>
          <img src={bike.picture} alt={bike.model}/>
          <div className="bike-data">
            <ul>
              <li><h2>{bike.model}</h2></li>
              <li><h3 id="vespa-promo">- $350 deposit upon any Vespa Purchase!</h3></li>
              <li id="vespa-money" className="bg-gray"><h3>Finance fees</h3> <span>${bike.finance}</span></li>
              <li id="vespa-money"><h3>Option to purchase fee</h3> <span>${bike.option}</span></li>
              <li id="vespa-money" className="bg-gray"><h3>Total ammount payable</h3> <span>${bike.total}</span></li>
              <li id="vespa-money"><h3>Duration</h3> <span>{bike.duration} months</span></li>
            </ul>
            <form id="appointment" name="appointment" onSubmit={handleSubmit}>
              <h1>Would you like to try this bike?</h1>
              <div>
                <input type="hidden" id="username" name="username" value={user}/>
                <input type="hidden" id="model" name="model" value={bike.model}/>
                <select name="cityName" id="cityName" onChange={event => handleChange(event, 'city')}>
                  { cities.map(city => (
                    <option key={city} value={city}>{ city }</option>
                  )) }
                </select>
                <input type="date" id="start" name="date" min="2020-08-01" max="2021-12-31"/>
                <input type="submit" value="Make appointment" id="submitBtn" />
              </div>
            </form>
          </div>
        </div>
      ))}
    </div>
  );
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
