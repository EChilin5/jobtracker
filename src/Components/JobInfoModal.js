import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./JobInfoModal.css";

const JobInfoModal = (props) => {
  let jobInformation = props.job;

  const updateStatusDesign = (status) => {
    if (status === "applied") {
      return <div className="applied">{status}</div>;
    } else if (status === "waitlisted") {
      return <div className="waitlisted">{status}</div>;
    } else if (status === "rejected") {
      return <div className="rejected">{status}</div>;
    } else if (status === "interview") {
      return <div className="interview">{status}</div>;
    } else if (status === "hired") {
      return <div className="hired">{status}</div>;
    }
  };

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
            <div className="job-info-container">
              <div className="job-info-left">Status :</div>
              <div className="job-info-right" id="status-size">
                {updateStatusDesign(jobInformation.status)}
              </div>
            </div>
            <div className="job-info-container">
              <div className="job-info-left">Location :</div>
              <div className="job-info-right">{jobInformation.location}</div>
            </div>
            <div className="job-info-container">
              <div className="job-info-left">Role :</div>
              <div className="job-info-right">{jobInformation.role}</div>
            </div>
            <div className="job-info-container">
              <div className="job-info-left">Website :</div>
              <div className="job-info-right">{jobInformation.website}</div>
            </div>
            <div className="job-info-container">
              <div className="job-info-left">Resume :</div>
              <div className="job-info-right">{jobInformation.resume}</div>
            </div>
            <div className="job-info-container">
              <div className="job-info-left">Elevator :</div>
              <div className="job-info-right">{jobInformation.elevator}</div>
            </div>
            <div className="job-info-container">
              <div className="job-info-left">Notes :</div>
              <div className="job-info-right">{jobInformation.notes}</div>
            </div>
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
