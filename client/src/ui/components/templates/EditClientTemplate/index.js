import React from "react";
//
import Modal from "../../atoms/Modal";
import Card from "../../atoms/Card";
import ClientForm from "../../organisms/ClientForm";
import defaultprops from "./settings/defaultprops";
import proptypes from "./settings/proptypes";

function EditClientTemplate({ isOpenModal, onClose }) {
  return (
    <Modal isOpen={isOpenModal} onClose={onClose}>
      <Card>
        <ClientForm onCloseModal={onClose} actionOn="edit"/>
      </Card>
    </Modal>
  );
}

EditClientTemplate.defaultProps = defaultprops;
EditClientTemplate.propTypes = proptypes;
EditClientTemplate.displayName = "EditClientTemplate";

export default EditClientTemplate;
