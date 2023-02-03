import { ConstainerButton, Button } from './FeedbackOptions.styled';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const arrKeys = Object.keys(options);

  return (
    <>
      <ConstainerButton>
        {arrKeys.map(opinion => (
          <Button
            key={opinion}
            type="button"
            name={opinion}
            onClick={() => onLeaveFeedback(opinion)}
          >
            {opinion[0].toUpperCase() + opinion.slice(1)}
          </Button>
        ))}
      </ConstainerButton>
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
