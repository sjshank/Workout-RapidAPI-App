import React, { FormEvent, useEffect, useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewJob } from "../features/job/jobSlice";
import { NewJobState, reducer } from "../reducers/addNewJob";
import { RootState } from "../store";
import { useNavigate } from "react-router-dom";

const AddJob: React.FunctionComponent<{}> = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [newJobState, dispatchNewJobAction] = useReducer(reducer, NewJobState);
  const { isLoading } = useSelector((state: RootState) => state.job);
  const changeHandler = (
    e: React.SyntheticEvent<HTMLInputElement | HTMLSelectElement, Event>
  ) => {
    dispatchNewJobAction({
      type: "SET_VALUE",
      key: e.currentTarget.name,
      value: e.currentTarget.value,
    });
  };
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch(addNewJob(newJobState));
    dispatchNewJobAction({ type: "RESET" });
    navigate("/");
  };

  return (
    <article className="container mx-auto px-4 p-2">
      <h3
        className="text-2xl font-serif font-bold leading-4 tracking-wider mb-4 text-center"
        aria-label="Add new job"
      >
        Add New Job
      </h3>
      <form
        role="form"
        onSubmit={handleSubmit}
        onReset={() => dispatchNewJobAction({ type: "RESET" })}
        className="max-w-sm mx-auto"
      >
        <div className="mb-5">
          <label
            htmlFor="title"
            className="block mb-2 text-base font-medium text-gray-900 "
          >
            Job Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={newJobState.title}
            onChange={changeHandler}
            className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-violet-700 focus:border-violet-700 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-violet-700 dark:focus:border-violet-700"
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="type"
            className="block mb-2 text-base font-medium text-gray-900 "
          >
            Select Job Type
          </label>
          <select
            id="type"
            name="type"
            value={newJobState.type}
            onChange={changeHandler}
            className="block w-full p-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-violet-700 focus:border-violet-700 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-violet-700 dark:focus:border-violet-700"
          >
            <option value="Internship">Internship</option>
            <option value="Full Time">Full Time</option>
            <option value="Remote">Remote</option>
          </select>
        </div>

        <div className="mb-5">
          <label
            htmlFor="salary"
            className="block mb-2 text-base font-medium text-gray-900 "
          >
            Salary
          </label>
          <input
            type="number"
            id="salary"
            name="salary"
            value={Number(newJobState.salary)}
            onChange={changeHandler}
            className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div className="flex justify-center items-center gap-4 w-full">
          <button
            role="button"
            type="submit"
            disabled={isLoading}
            className="text-lg font-serif font-bold leading-2 tracking-wide p-2 border border-neutral-900 shadow-md shadow-violet-700"
          >
            Submit
          </button>
          <button
            role="button"
            type="reset"
            disabled={isLoading}
            className="text-lg font-serif font-bold leading-2 tracking-wide p-2 border border-neutral-900 shadow-md shadow-violet-700"
          >
            Reset
          </button>
        </div>
      </form>
    </article>
  );
};

export default AddJob;
