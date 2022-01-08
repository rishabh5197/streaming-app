import React, { useState } from "react";
import "./Form.css";
// import ReactDOM from "react-dom";
import SearchArea from "./SearchArea";
import { Router, Link } from "@reach/router";
import WatchArea from "./WatchArea";
import ColorContext from "./ColorContext";

const FormSuccess = () => {
  const themeColor = useState("green");
  return (
    <ColorContext.Provider value={themeColor}>
      <div>
        <header>
          <Link to="/">Stream Tube</Link>
        </header>

        <Router>
          <SearchArea path="/" />
          <WatchArea path="/watch/:id" />
        </Router>
      </div>
    </ColorContext.Provider>
  );
};

export default FormSuccess;
