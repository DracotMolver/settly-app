import PropTypes from "prop-types";

const proptypes = {
  isPrimary: PropTypes.bool,
  disabled: PropTypes.bool,
  hasError: PropTypes.bool,
  isSuccess: PropTypes.bool,
  text: PropTypes.string.isRequired
};

export default proptypes;
