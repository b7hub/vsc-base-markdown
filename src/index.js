import React, { useEffect, useState, useLayoutEffect } from "react";
import ReactDom from "react-dom";
import Editor from "./components/Editor";
import { instance as poster } from "./postMessage";

import "./index.less";

const App = () => {

  const [initialValue, setInitialValue] = useState("");

  const setContent = ({ payload = "" }) => {
    setInitialValue(payload)
  }

  useEffect(() => {
    poster.subscribe("vscBaseMarkdown.setContent", setContent)
  
  }, [])

  useLayoutEffect(() => {
    poster.post({
      action: "vscBaseMarkdown.mounted"
    })
  }, [])

  const onChange = (value) => {
    console.log("vscBaseMarkdown.onChange", value)
    poster.post({
      action: "vscBaseMarkdown.onChange",
      value
    })
  }

  return (
    <div className="app">
      <Editor initialValue={initialValue} onChange={onChange} />
    </div>
  );
};

ReactDom.render(<App />, document.getElementById("app"));
