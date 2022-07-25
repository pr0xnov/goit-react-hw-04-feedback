import React from 'react';
import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={s.buttonsList}>
      <li>
        {options.map(elem => (
          <button
            key={elem}
            type="button"
            className={s.button}
            name={elem}
            onClick={onLeaveFeedback}
          >
            {elem}
          </button>
        ))}
      </li>
    </ul>
  );
};

FeedbackOptions.protoTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.object.isRequired,
};

export default FeedbackOptions;
