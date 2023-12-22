import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import JobInfoModal from "./JobInfoModal";
import "./JobTrackerChart.css";

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
    <div>
      <div>
        {" "}
        <JobInfoModal
          showModal={show}
          displayForm={displayModal}
          job={props.positions[rowSelected]}
        />
      </div>
      <Table bordered hover variant="dark">
        <thead>
          <tr className="table-header">
            <th></th>
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
              <tr
                className="table-content"
                key={job.id}
                onClick={(e) => onClickRow(e, job.id)}
              >
                <th>{job.id + 1}</th>
                <th>{job.company}</th>
                <th>{job.location}</th>
                <th>{job.role}</th>
                <th>{updateStatusDesign(job.status)}</th>
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
