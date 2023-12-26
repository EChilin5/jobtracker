import React from "react";
import "./JobBoardMain.css";
import JobBoardTable from "./JobBoardTable";

const JobBoardMain = (props) => {
  let job = props.positions;
  return (
    <div>
      <div>
        <div>
          <h2>Application Track Record</h2>
        </div>

        <div className="job-overall-content">
          <div className="job-overall-content-heading">Interested: 10</div>
          <div className="job-overall-content-heading">Applied: 100</div>
          <div className="job-overall-content-heading">Interview: 2</div>
          <div className="job-overall-content-heading">Hired: 0</div>
          <div className="job-overall-content-heading">Rejected: 32</div>
        </div>
        <div className="job-table-section">
          <JobBoardTable positions={job} />
        </div>
      </div>
    </div>
  );
};

export default JobBoardMain;
