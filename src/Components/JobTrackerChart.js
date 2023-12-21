import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import JobInfoModal from "./JobInfoModal";

const JobTrackerChart = (props) => {
  const [show, setShow] = useState(false);
  const [rowSelected, setRowSelected] = useState(0);

  const displayModal = () => setShow(!show);

  const onClickRow = (event, row) => {
    event.preventDefault();
    setRowSelected(row);
    let jobContent = props.positions[row];
    displayModal();
  };

  return (
    <div>
      <div>
        {" "}
        <JobInfoModal
          showModal={show}
          displayForm={displayModal}
          job={props.positions[rowSelected]}
        />
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Company</th>
            <th>Location</th>
            <th>Role</th>
            <th>Status</th>
            <th>Website</th>
            <th>Resume</th>
            <th>Elevator</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {props.positions.map((job) => {
            return (
              <tr key={job.id} onClick={(e) => onClickRow(e, job.id)}>
                <th>{job.id + 1}</th>
                <th>{job.company}</th>
                <th>{job.location}</th>
                <th>{job.role}</th>
                <th>{job.status}</th>
                <th>{job.website}</th>
                <th>{job.resume}</th>
                <th>{job.elevator}</th>
                <th>{job.notes}</th>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default JobTrackerChart;
