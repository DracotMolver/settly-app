import PropTypes from "prop-types";

const proptypes = {
  onCloseModal: PropTypes.func,
  actionOn: PropTypes.oneOf(["create", "edit"]).isRequired,
};

export default proptypes;
