import React, { useState } from "react";
import "./JobBoardCard.css";
import AddNewJobModal from "../AddNewJobModal";
import JobInfoModal from "../JobInfoModal";

const JobBoardCard = (props) => {
  let job = props.jobInfo;
  const displayModal = () => setShow(!show);

  const [show, setShow] = useState(false);

  return (
    <div>
      <div>
        <JobInfoModal showModal={show} displayForm={displayModal} job={job} />
      </div>
      <div className="job-table-board-card" onClick={() => displayModal()}>
        <div>
          <h5>{job.company}</h5>
        </div>
        <div>{job.role}</div>
        <div>12/26/23</div>
      </div>
    </div>
  );
};

export default JobBoardCard;
