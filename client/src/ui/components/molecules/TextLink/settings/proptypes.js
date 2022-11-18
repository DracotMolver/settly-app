import PropTypes from "prop-types";

const proptypes = {
  helpText: PropTypes.string.isRequired,
  linkText: PropTypes.string,
  to: PropTypes.string.isRequired,
};

export default proptypes;
