import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { xonokai } from "react-syntax-highlighter/dist/esm/styles/prism";
import CODE_EXAMPLE from "../../code_examples/media.js";
import {Media} from 'zapify-ui';

function PushButtonDocs() {
  return (
    <div className="article-content">
      <p>
        <b>Zap Media</b> containing 2 typeGet, "linear" and "nested".
      </p>
      <h2>Example</h2>
      <div style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "150px"
      }}>
        <Media typeGet="linear">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</Media>       
      </div>
      <h2>Code</h2>
      <SyntaxHighlighter
        language="jsx"
        style={xonokai}
        customStyle={{ width: "50%" }}
      >
        {CODE_EXAMPLE}
      </SyntaxHighlighter>
      <table style={{ textAlign: "left", width: "95%" }}>   
      </table>
    </div>
  );
}

export default PushButtonDocs;
