import React from "react";
//
import Modal from "../../atoms/Modal";
import Card from "../../atoms/Card";
import AddClientForm from "../../organisms/AddClientForm";
import defaultprops from "./settings/defaultprops";
import proptypes from "./settings/proptypes";

function AddClientTemplate({ isOpenModal, onClose }) {
  return (
    <Modal isOpen={isOpenModal} onClose={onClose}>
      <Card>
        <AddClientForm />
      </Card>
    </Modal>
  );
}

AddClientTemplate.defaultProps = defaultprops;
AddClientTemplate.propTypes = proptypes;
AddClientTemplate.displayName = "AddClientTemplate";

export default AddClientTemplate;
