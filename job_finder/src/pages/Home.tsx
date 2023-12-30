import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectFilterKeys } from "../features/filter/filterSlice";
import { AppDispatch, RootState } from "../store";
import { TJob, getJobs } from "../features/job/jobSlice";
import Spinner from "../ui/Spinner";
import Jobs from "../components/Jobs";
import { useOutletContext } from "react-router-dom";

const Home: React.FunctionComponent<{}> = (): JSX.Element => {
  const selectedFilterKeys = useSelector(selectFilterKeys);
  //Added only for testing
  const abc = useOutletContext();
  console.log(abc);
  //ends here
  const dispatch: AppDispatch = useDispatch();
  const { isLoading, jobs, isError, error } = useSelector(
    (state: RootState) => state.job
  );
  useEffect(() => {
    dispatch(getJobs());
  }, [dispatch]);

  let loadingContent = isLoading ? <Spinner /> : null;
  let filteredJobs: TJob[] = [];
  if (selectedFilterKeys.length > 0) {
    filteredJobs = jobs.filter((job) => {
      return selectedFilterKeys.includes(job.type);
    });
  }
  return (
    <article className="container mx-auto px-4 p-2" data-testid="home">
      <div className="flex flex-col gap-4 justify-center items-center">
        <h3
          className="text-2xl font-serif font-bold leading-4 tracking-wider mb-2"
          aria-label="Job List"
        >
          Open Jobs
        </h3>
        {/* <!-- Search Bar --> */}
        {loadingContent}
        <Jobs jobs={filteredJobs} data-testid="job-list" />
      </div>
    </article>
  );
};

export default Home;
