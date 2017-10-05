import React from 'react';
import PropTypes from 'prop-types';

const SafkaEntry = ({ name, weight, isGross }) => (
  <div className="safka">
    <div className="safka__name">{name}</div>
    <div className="safka__weight">{weight}</div>
    <div className="safka__isMeat">{isGross}</div>
  </div>
);

SafkaEntry.propTypes = {
  name: PropTypes.string.isRequired,
  weight: PropTypes.number.isRequired,
  isGross: PropTypes.bool.isRequired,
};

export default SafkaEntry;
