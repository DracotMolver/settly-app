import PropTypes from "prop-types";

const proptypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  required: PropTypes.bool,
  hasError: PropTypes.bool,
};

export default proptypes;
