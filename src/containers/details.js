import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

const Details = props => {
  const { bikes } = props;
  const { model } = props.match.params;
  
  return (
    <div id="details-page">
      {bikes.filter(bike => bike.model === model ).map(bike => (
        <div className="details-element" key={bike.model}>
          <ul>
            <li><h2>{bike.model}</h2></li>
            <li><h3>Finance fees: ${bike.finance}</h3></li>
            <li><h3>Option to purchase fee: ${bike.option}</h3></li>
            <li><h3>Total ammount payable: ${bike.total}</h3></li>
            <li><h3>Duration: {bike.duration} months</h3></li>
          </ul>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = state => ({
  bikes: state.bikes,
});

Details.propTypes = {
  bikes: PropTypes.array.isRequired,
};

export default connect(mapStateToProps)(withRouter(Details));
