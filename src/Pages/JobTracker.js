import React from "react";
import JobTrackerChart from "../Components/JobTrackerChart";

const JobTracker = () => {
  let jobs = [
    {
      id: 0,
      company: "Google",
      location: "Mountain View",
      role: "software engineer",
      status: "applied",
      website: "test",
      resume: "test",
      elevator: "Testing 123 43 re",
      notes: "testing hosting page etc",
    },
    {
      id: 1,
      company: "Google",
      location: "Mountain View",
      role: "software engineer",
      status: "applied",
      website: "test",
      resume: "test",
      elevator: "Testing 123 43 re",
      notes: "testing hosting page etc",
    },
  ];

  return (
    <div>
      <div>
        <h1>Job Tracker</h1>
      </div>
      <div>Welcome to your job tracker</div>
      <div>
        <JobTrackerChart positions={jobs} />
      </div>
    </div>
  );
};

export default JobTracker;
