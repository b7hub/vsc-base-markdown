import React, { useState, useEffect } from "react";
import "./index.less";

const Editor = ({ value, onChange }) => {
  const [taValue, setTaValue] = useState(value);

  useEffect(() => {
    setTaValue(value);
  }, [value]);

  const _onChange = (value) => {
    if (onChange) {
      onChange(value);
    } else {
      setTaValue(value);
    }
  };

  return (
    <div className="editor">
      <textarea
        placeholder="Enter something funny"
        type="text"
        value={taValue}
        onChange={_onChange}
      ></textarea>
    </div>
  );
};

export default Editor;
