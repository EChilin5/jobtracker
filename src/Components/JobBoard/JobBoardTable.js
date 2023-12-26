import React from "react";
import JobBoardCard from "./JobBoardCard";
import "./JobBoardTable.css";

const JobBoardTable = (props) => {
  let jobs = props.positions;
  let count = [1, 2, 3];

  const displayJobCards = (status) => {
    let temp = jobs.filter((job) => job.status === status);

    return temp.map((job) => {
      return (
        <div key={job.id}>
          <JobBoardCard jobInfo={job} />
        </div>
      );
    });
  };

  return (
    <div>
      <div className="job-board-table">
        <div className="job-board-table-col">
          <div className="job-board-table-header">
            <h4>Interested</h4>
          </div>
          <div className="job-board-table-content">
            {displayJobCards("interested")}
          </div>
        </div>
        <div className="job-board-table-col">
          <div className="job-board-table-header">
            <h4>Applied</h4>
          </div>
          <div className="job-board-table-content">
            {displayJobCards("applied")}
          </div>
        </div>
        <div className="job-board-table-col">
          <div className="job-board-table-header">
            <h4>Waitlisted</h4>
          </div>
          <div className="job-board-table-content">
            {displayJobCards("waitlisted")}
          </div>
        </div>
        <div className="job-board-table-col">
          <div className="job-board-table-header">
            <h4>Interview</h4>
          </div>
          <div className="job-board-table-content">
            {displayJobCards("interview")}
          </div>
        </div>
        <div className="job-board-table-col">
          <div className="job-board-table-header">
            <h4>Rejected</h4>
          </div>
          <div className="job-board-table-content">
            {displayJobCards("rejected")}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobBoardTable;
