import React from 'react';
import PropTypes from 'prop-types';
import { ButtonList, FededbackButton } from './FeedbackOptions.styled';

const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <ButtonList>
      {Object.keys(options).map(btn => {
        return (
          <li key={btn}>
            <FededbackButton name={btn} onClick={onLeaveFeedback}>
              {btn}
            </FededbackButton>
          </li>
        );
      })}
    </ButtonList>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.object.isRequired,
};
