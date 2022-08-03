import { useState } from 'react';
import Section from './components/Section';
import FeedbackOptions from './components/FeedbackOptions';
import Statistics from './components/Statistics';
import Notification from './components/Notification';
import s from './App.module.css';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClick = event => {
    const { name } = event.target;

    switch (name) {
      case 'good':
        setGood(prevState => (prevState += 1));
        break;
      case 'neutral':
        setNeutral(prevState => (prevState += 1));
        break;
      case 'bad':
        setBad(prevState => (prevState += 1));
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => good + neutral + bad;

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    if (total) {
      return `${((good / total) * 100).toFixed(1)}%`;
    }
  };

  return (
    <>
      <div className={s.feedbackForm}>
        <Section title="Please leave feedback:">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={handleClick}
          />
        </Section>
        <Section title="Statistics:">
          {countTotalFeedback() ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </div>
    </>
  );
}
