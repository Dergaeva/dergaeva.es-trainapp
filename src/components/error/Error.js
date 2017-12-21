import PropTypes from 'prop-types';

export const Error = props =>
  <mark style={{ color: props.color }}>{ props.text || Error }</mark>;

Error.propTypes = { text: PropTypes.string };
Error.defaultProps = { text: 'ошибка!' };

