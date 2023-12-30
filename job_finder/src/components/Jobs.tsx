import React from "react";
import { TJob } from "../features/job/jobSlice";
import JobItem from "./JobItem";

type TJobsProps = {
  jobs: TJob[];
};

const Jobs: React.FunctionComponent<TJobsProps> = ({ jobs=[] }: TJobsProps) => {
  return (
    <div className="flow-root md:w-1/2 lg:w-1/2 w-full mt-4">
        <h5 className="w-full text-center">Total {jobs.length} records</h5>
      <ul role="list" className=" shadow-lg">
        {jobs.map((job: TJob) => {
          return <JobItem key={job.id} {...job} />;
        })}
      </ul>
    </div>
  );
};

export default Jobs;
