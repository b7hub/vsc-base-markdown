import React from "react";
import ReactDom from "react-dom";
import Editor from "./components/Editor";

import "./index.less";

const App = () => {
  return (
    <div className="app"><Editor /></div>
  )
};


ReactDom.render(<App />, document.getElementById("app"))