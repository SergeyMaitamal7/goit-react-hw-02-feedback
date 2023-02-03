import React, { Component } from 'react';
import { StatisticsElement } from './Statistics.styled.';
import PropTypes from 'prop-types';

export const Statistics = ({ good, neutral, bad, total, feedback }) => {
  return (
    <>
      <StatisticsElement> Good: {good}</StatisticsElement>
      <StatisticsElement>Neutral: {neutral}</StatisticsElement>
      <StatisticsElement>Bad: {bad}</StatisticsElement>
      <StatisticsElement>Total: {total}</StatisticsElement>
      <StatisticsElement>
        Positive feedback: {total && feedback}
      </StatisticsElement>
    </>
  );
};
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
