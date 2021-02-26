import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';

const messageEdit = () => toast.info('Todo Changed!', {
  position: 'bottom-right',
  autoClose: 3000,
});

const ModalComponent = ({
  show, toggle, title, children, onSubmit,
}) => (
  <Modal show={show} onHide={toggle}>
    <Modal.Header closeButton>
      <Modal.Title>{title}</Modal.Title>
    </Modal.Header>
    <Modal.Body>{children}</Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={toggle}>
        Close
      </Button>
      <Button variant="primary" onClick={() => { messageEdit(); onSubmit(); }}>
        Save Changes
      </Button>
      <ToastContainer />
    </Modal.Footer>
  </Modal>
);

export default ModalComponent;
