import React from "react";
// import "../graphs/main.css";

import Dashboard from "./Dashboard/Dashboard";
import PageTitle from "../graphs/Page/Pagetitle";


const Main = () => {
  return (
    <main id="main" className="main">
      <PageTitle page="Dashboard" />
      <Dashboard />

    </main>
  );
};

export default Main;