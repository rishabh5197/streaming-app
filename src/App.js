// import React, { useState } from "react";
// import ReactDOM from "react-dom";
// import SearchArea from "./SearchArea";
// import { Router, Link } from "@reach/router";
// import WatchArea from "./WatchArea";
// import ColorContext from "./ColorContext";

// const App = () => {
//   const themeColor = useState("green");
//   return (
//     <ColorContext.Provider value={themeColor}>
//       <div>
//         <header>
//           <Link to="/">Stream Tube</Link>
//         </header>

//         <Router>
//           <SearchArea path="/" />
//           <WatchArea path="/watch/:id" />
//         </Router>
//       </div>
//     </ColorContext.Provider>
//   );
// };

// ReactDOM.render(React.createElement(App), document.getElementById("root"));

import React from "react";
import "./App.css";
import Form from "./Form";
import ReactDOM from "react-dom";

function App() {
  return <Form />;
}

export default App;
ReactDOM.render(React.createElement(App), document.getElementById("root"));
