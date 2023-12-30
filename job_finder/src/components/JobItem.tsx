import React, { useEffect } from "react";
import { TJob, deleteJob } from "../features/job/jobSlice";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";

type TJobItemProps = Omit<TJob, "deadline">;
let rupee = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
});

const JobItem: React.FunctionComponent<TJobItemProps> = ({
  id,
  salary,
  title,
  type,
}: TJobItemProps) => {
  const dispatch = useDispatch();
  const webWorker: Worker = new Worker("/worker.ts");

  useEffect(() => {
    return () => {
      webWorker.terminate();
    };
  }, []);

  const handleDelete = () => {
    webWorker.postMessage("Delete");
    dispatch(deleteJob(id));
    webWorker.onmessage = (event: MessageEvent) => {
      const { data } = event;
      console.log(data);
    };
  };
  return (
    <li className="py-3 sm:py-4 border-b-2 border-neutral-500">
      <div className="flex items-center">
        <div className="flex-1 min-w-0 m-2">
          <p className="text-lg font-medium text-violet-700">{title}</p>
          <p className="text-sm text-gray-500 truncate">{type}</p>
        </div>
        <div className="m-2 inline-flex items-center text-base font-semibold text-violet-700">
          {`${rupee.format(Number(salary))}`}
        </div>
      </div>
      <div className="flex justify-center items-center gap-4 w-full">
        <Link
          role="link"
          to={`edit/${id}`}
          className="text-teal-700 font-semibold"
        >
          Update
        </Link>
        <a
          role="button"
          onClick={handleDelete}
          className="text-red-600 font-semibold"
        >
          Delete
        </a>
      </div>
    </li>
  );
};

export default JobItem;
