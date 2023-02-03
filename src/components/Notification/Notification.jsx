import { NotifText } from './Notification.styled';
import PropTypes from 'prop-types';

export const Notification = ({ message }) => {
  return (
    <>
      <NotifText>{message}</NotifText>
    </>
  );
};

Notification.propTypes = {
    message: PropTypes.string.isRequired,
  };