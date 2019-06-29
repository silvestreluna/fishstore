import PropTypes from 'prop-types';

const orderShape = PropTypes.shape({
  dateTime: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  fishes: PropTypes.object.isRequired,
  uid: PropTypes.string.isRequired,
});

export default { orderShape };
