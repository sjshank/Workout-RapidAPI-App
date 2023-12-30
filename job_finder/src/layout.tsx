import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";

const Layout: React.FunctionComponent<{}> = () => {
  return (
    <main
      className="max-auto grid grid-flow-row md:grid-cols-4 lg:grid-cols-4 gap-2 lg:justify-items-stretch 
      md:justify-items-stretch justify-items-center w-full"
      style={{ minHeight: "90vh" }}
    >
      <section className="p-5 md:col-span-1 lg:col-span-1 place-content-center w-full border-r-2 border-violet-900">
        <Sidebar />
      </section>
      <section className="p-5 md:col-span-3 lg:col-span-3 place-content-center lg:justify-self-stretch md:justify-self-stretch">
        <Outlet context={{ abc: "123" }} />
      </section>
    </main>
  );
};

export default Layout;
