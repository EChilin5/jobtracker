import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./AddNewJobModal.css";

const AddNewJobModal = (props) => {
  return (
    <div className="add-new-modal-content">
      <Modal show={props.showModal} onHide={() => props.displayForm()}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Job</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Company Name</Form.Label>
            <Form.Control type="text" placeholder="Enter company name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Location</Form.Label>
            <Form.Control type="text" placeholder="Enter location" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Role</Form.Label>
            <Form.Control type="text" placeholder="Enter role" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Company Website</Form.Label>
            <Form.Control type="text" placeholder="Enter website" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Recruiter</Form.Label>
            <Form.Control type="text" placeholder="Enter recruiter name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Resume</Form.Label>
            <Form.Control type="text" placeholder="Enter resume link" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Elevator Speech</Form.Label>
            <Form.Control type="text" placeholder="Enter elevator speech" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Status</Form.Label>
            <Form.Control type="text" placeholder="Enter status" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Notes</Form.Label>
            <Form.Control type="text" placeholder="Enter notes" />
          </Form.Group>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={() => props.displayForm()}>
            Close
          </Button>
          <Button variant="primary" onClick={() => props.displayForm()}>
            Save changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddNewJobModal;
