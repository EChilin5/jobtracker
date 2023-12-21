import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const JobInfoModal = (props) => {
  let jobInformation = props.job;
  return (
    <div
    //   className="modal show"
    //   style={{ display: "block", position: "initial" }}
    >
      <Modal show={props.showModal} onHide={() => props.displayForm()}>
        <Modal.Header closeButton>
          <Modal.Title>{jobInformation.company}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div>
            <div>Status :{jobInformation.status}</div>
            <div>Location: {jobInformation.location}</div>
            <div>Role: {jobInformation.role}</div>
            <div>Website: {jobInformation.website}</div>
            <div>Resume: {jobInformation.resume}</div>
            <div>Elevator: {jobInformation.elevator}</div>
            <div>Notes: {jobInformation.notes}</div>
          </div>
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

export default JobInfoModal;
