import React, { useEffect, useMemo, useRef } from "react";
import { Editor } from '@toast-ui/react-editor';

import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';

import "./index.less";

const MyEditor = ({ initialValue, onChange }) => {
  const editorRef = useRef()

  const events = useMemo(() => {
    return {
      change: () => {
        onChange(editorRef.current.editorInst.getMarkdown())
      }
    }
  }, [])

  useEffect(() =>{
    initialValue && editorRef.current.editorInst.setMarkdown(initialValue)
  }, [initialValue])

  return (
    <div className="editor">
      <Editor
        ref={editorRef}
        previewStyle="vertical"
        height="100%"
        initialEditType="markdown"
        useCommandShortcut={true}
        usageStatistics={false}
        events={events}
      />
    </div>
  );
};

export default MyEditor;
