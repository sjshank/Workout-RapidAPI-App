import React from "react";
import { useDispatch } from "react-redux";
import { filtersSelected } from "../features/filter/filterSlice";
import { Link, useLocation } from "react-router-dom";

const Sidebar: React.FunctionComponent<{}> = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  return (
    <section className="p-2 md:col-span-1 lg:col-span-1 place-content-center">
      <div
        className="flex flex-col gap-4 lg:justify-start lg:items-start md:justify-start md:items-start justify-center items-center "
        data-testid="filter"
      >
        <h3
          className="text-2xl font-serif font-bold leading-4 tracking-wider mb-2"
          aria-label="filter section"
          role="filter"
        >
          Filters
        </h3>
        {/* <div className=" self-start w-full flex-row flex">
          <label htmlFor="allJobs" className="inline-block  order-2">
            All Jobs
          </label>
          <input
            className="border border-neutral-950 mr-3 order-1"
            aria-label="All Jobs"
            tabIndex={0}
            type="checkbox"
            id="allJobs"
            name="allJobs"
            value="All"
            defaultChecked={true}
            disabled={location.pathname !== "/"}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              dispatch(
                filtersSelected({
                  name: e.target.name,
                  value: e.target.value,
                  checked: e.target.checked,
                })
              );
            }}
          />
        </div> */}
        <div className="self-start w-full flex-row flex" data-testid="filter">
          <label htmlFor="internship" className="inline-block  order-2">
            Internship
          </label>
          <input
            className="border border-neutral-950 mr-3 order-1"
            aria-label="Internship"
            tabIndex={0}
            type="checkbox"
            id="internship"
            name="internship"
            value="Internship"
            defaultChecked={true}
            disabled={location.pathname !== "/"}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              dispatch(
                filtersSelected({
                  name: e.target.name,
                  value: e.target.value,
                  checked: e.target.checked,
                })
              )
            }
          />
        </div>
        <div className="self-start w-full flex-row flex" data-testid="filter">
          <label htmlFor="fullTime" className="inline-block  order-2">
            Full Time
          </label>
          <input
            className="border border-neutral-950 mr-3 order-1"
            aria-label="Full Time"
            tabIndex={0}
            type="checkbox"
            id="fullTime"
            name="fullTime"
            value="Full Time"
            defaultChecked={true}
            disabled={location.pathname !== "/"}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              dispatch(
                filtersSelected({
                  name: e.target.name,
                  value: e.target.value,
                  checked: e.target.checked,
                })
              )
            }
          />
        </div>
        <div className="self-start w-full flex-row flex" data-testid="filter">
          <label htmlFor="remote" className="inline-block  order-2">
            Remote
          </label>
          <input
            className="border border-neutral-950 mr-3 order-1"
            aria-label="Remote"
            tabIndex={0}
            type="checkbox"
            id="remote"
            name="remote"
            value="Remote"
            defaultChecked={true}
            disabled={location.pathname !== "/"}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              dispatch(
                filtersSelected({
                  name: e.target.name,
                  value: e.target.value,
                  checked: e.target.checked,
                })
              )
            }
          />
        </div>
        <div>
          <Link
            role="button"
            to={`${location.pathname === "/" ? "/add" : "/"}`}
            aria-label="add"
            className="text-lg font-serif font-bold leading-2 tracking-wide p-2 border border-neutral-900 shadow-md shadow-violet-700"
          >
            {location.pathname === "/" ? `Add New Job` : "Back To Home"}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
