import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebookF, faGoogle, faTwitter} from "@fortawesome/free-brands-svg-icons";

const Catalogue = props => {
  const { bikes, user, history } = props;

  function isLoggedIn() {
    // if (user === "default") {
    //   return (
    //     <a href="/">You're not signed in, please login with your username in order to view this page.</a>
    //   );
    // }
    return (
        <div className="menu">
          <div className="sidebar">
            <div className="sidebar-links">
              <h1>Scespa</h1>
              <a href="#">Models</a>
              <a href="#">Appointments</a>
              <a href="#">Lifestyle</a>
              <a href="#">Shop</a>
              <a href="#">Test Drive</a>
            </div>
            <div className="social-icons">
              <FontAwesomeIcon icon={faTwitter} id="social-icon"/>
              <FontAwesomeIcon icon={faGoogle} id="social-icon"/>
              <FontAwesomeIcon icon={faFacebookF} id="social-icon"/>
              <p>© 2020 Isaac González</p>
            </div>
          </div>
          {bikes.map(bike => (
              <div className="category-element" key={bike.model}>
                <ul>
                  <li><h2 onClick={() => history.push((`/bike/${bike.model}`))}>{bike.model}</h2></li>
                  <li><p>{bike.description}</p></li>
                </ul>
              </div>
            ))}
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

Catalogue.propTypes = {
  bikes: PropTypes.array.isRequired,
  user: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Catalogue);
