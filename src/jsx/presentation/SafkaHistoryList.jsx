import React from 'react';
import PropTypes from 'prop-types';
import SafkaEntry from './SafkaEntry';

const SafkaHistoryList = ({ history }) => (
  <div className="history">
    {history.map(day => (
      <div key={day.date} className="history-day">
        <h2 className="history-day__title">{day.date}</h2>
        {day.safkas.map(safka => (
          <SafkaEntry
            key={safka.name + safka.weight}
            name={safka.name}
            weight={safka.weight}
            isGross={safka.isGross}
          />
        ))}
      </div>
    ))}
  </div>
);

SafkaHistoryList.propTypes = {
  history: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string.isRequired,
      safkas: PropTypes.array.isRequired,
    }).isRequired,
  ).isRequired,
};

export default SafkaHistoryList;
