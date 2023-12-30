import React from "react";

const NotFound: React.FunctionComponent<{}> = () => {
  return (
    <div
      className="m-10 p-10 w-full grid place-content-center"
      data-testid="not-found"
    >
      <p className="text-xl text-stone-950 font-mono font-medium">
        404 | Page not found.
      </p>
    </div>
  );
};

export default React.memo(NotFound);
