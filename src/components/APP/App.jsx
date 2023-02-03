import React, { Component } from 'react';
import { Statistics } from 'components/Statistics/Statistics/Statistics';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Section } from 'components/Section/Section';
import { Constainer } from './App.styled';
import { Notification } from 'components/Notification/Notification';
import PropTypes from 'prop-types';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = option => {
    this.setState(preState => ({ [option]: preState[option] + 1 }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return bad + neutral + good;
  };

  countPositiveFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = bad + neutral + good;
    return `${((good / total) * 100).toFixed(0)}%`;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positiveFeedback = this.countPositiveFeedback();
    return (
      <>
        <Constainer>
          <Section title="Please leave feedback">
            <FeedbackOptions
              options={this.state}
              onLeaveFeedback={this.handleClick}
            />
          </Section>
          <Section title="Statistic">
            {total === 0 ? (
              <Notification message="There is no feedback" />
            ) : (
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={total}
                feedback={positiveFeedback}
              />
            )}
          </Section>
        </Constainer>
      </>
    );
  }
}
