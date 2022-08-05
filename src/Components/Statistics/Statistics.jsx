import React from 'react';
import PropTypes from 'prop-types';
import { FeedbackList, TotalValue } from './Statistics.styled';

const Statistics = ({
  allFeedback,
  countTotalFeedback,
  countPositiveFeedbackPercentage,
}) => {
  const { good, neutral, bad } = allFeedback;
  return (
    <div>
      <FeedbackList>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
      </FeedbackList>
      <TotalValue>
        <p>
          Total: <span>{countTotalFeedback}</span>
        </p>
        <p>
          Positive feedback: <span>{countPositiveFeedbackPercentage}%</span>
        </p>
      </TotalValue>
    </div>
  );
};

export default Statistics;

Statistics.propTypes = {
  allFeedback: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),

  onCountTotalFeedback: PropTypes.number.isRequired,
  onCountPositiveFeedbackPercentage: PropTypes.number.isRequired,
};
