import React from "react";
import { Link } from "react-router-dom";

const Header: React.FunctionComponent<{}> = (): JSX.Element => {
  return (
    <header className="flex justify-start p-5 w-full border-violet-700 border-b-2">
      <Link
        role="heading"
        aria-label="Home"
        className="text-4xl text-violet-700 font-bold text-left"
        to="/"
      >
        Job Spotter
      </Link>
    </header>
  );
};

export default React.memo(Header);
