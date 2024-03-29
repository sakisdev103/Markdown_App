import React, { useState } from "react";
import { marked } from "marked";
import { markDownDefault } from "./default";

const App = () => {
  const [text, setText] = useState(markDownDefault);
  const [mark, setMark] = useState(marked.parse(text));

  const handleChange = (e) => {
    setText(e.target.value);
    setMark(marked.parse(e.target.value));
  };

  return (
    <>
      <div className="grid">
        <div>
          <h1 className="card">Editor</h1>
          <div className="container">
            <textarea
              onChange={handleChange}
              id="editor"
              value={text}
            ></textarea>
          </div>
        </div>
        <div>
          <h1 className="card">Preview</h1>
          <div
            className="container"
            id="preview"
            dangerouslySetInnerHTML={{ __html: mark }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default App;
