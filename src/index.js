import React, { useEffect, useState, useLayoutEffect } from "react";
import ReactDom from "react-dom";
import Editor from "./components/Editor";
import { instance as poster } from "./postMessage";
import MarkdownIt  from "markdown-it"

import "./index.less";

const md = new MarkdownIt();

const App = () => {

  const [text, setText] = useState("");

  const setContent = ({ payload = "" }) => {
    setText(md.render(payload))
  }

  useEffect(() => {
    poster.subscribe("vscBaseMarkdown.setContent", setContent)
  }, [])

  useLayoutEffect(() => {
    poster.post({
      action: "vscBaseMarkdown.mounted"
    })
  }, [])

  return (
    <div className="app">
      <Editor value={text} />
    </div>
  );
};

ReactDom.render(<App />, document.getElementById("app"));
