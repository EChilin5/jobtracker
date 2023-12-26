import React, { useState } from "react";
import JobTrackerChart from "../Components/JobTrackerChart";
import Button from "react-bootstrap/esm/Button";
import AddNewJobModal from "../Components/AddNewJobModal";
import "./JobTracker.css";
import JobBoardMain from "../Components/JobBoard/JobBoardMain";

const JobTracker = () => {
  let jobs = [
    {
      id: 0,
      company: "Google",
      location: "Mountain View",
      role: "software engineer",
      status: "hired",
      website: "test",
      resume: "test",
      elevator: "Testing 123 43 re",
      notes: "testing hosting page etc",
    },
    {
      id: 1,
      company: "Drupple",
      location: "Mountain View",
      role: "software engineer",
      status: "applied",
      website: "test",
      resume: "test",
      elevator: "Testing 123 43 re",
      notes: "testing hosting page etc",
    },
    {
      id: 2,
      company: "Home Depot",
      location: "Mountain View",
      role: "software engineer",
      status: "rejected",
      website: "test",
      resume: "test",
      elevator: "Testing 123 43 re",
      notes: "testing hosting page etc",
    },
    {
      id: 3,
      company: "Yahooo",
      location: "Mountain View",
      role: "software engineer",
      status: "waitlisted",
      website: "test",
      resume: "test",
      elevator: "Testing 123 43 re",
      notes: "testing hosting page etc",
    },
    {
      id: 4,
      company: "Microsoft",
      location: "Mountain View",
      role: "software engineer",
      status: "interview",
      website: "test",
      resume: "test",
      elevator: "Testing 123 43 re",
      notes: "testing hosting page etc",
    },
  ];

  const [show, setShow] = useState(false);
  const [rowSelected, setRowSelected] = useState(0);

  const displayModal = () => setShow(!show);

  return (
    <div>
      <div>
        <AddNewJobModal showModal={show} displayForm={displayModal} />
      </div>
      <div className="job-tracker-header">
        <h1>Job Tracker</h1>
      </div>
      <div className="job-tracker-subheading-container">
        <div className="job-tracker-subheading-content">
          Welcome to your job tracker
          <br />
          Click on any row to view job Information
        </div>
        <div className="job-tracker-subheading-btn">
          <button onClick={() => displayModal()}>New Job</button>
        </div>
      </div>

      <div>
        <JobTrackerChart positions={jobs} />
      </div>

      <div>
        <JobBoardMain positions={jobs} />
      </div>
    </div>
  );
};

export default JobTracker;
