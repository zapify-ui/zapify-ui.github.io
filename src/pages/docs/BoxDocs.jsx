import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { xonokai } from "react-syntax-highlighter/dist/esm/styles/prism";
import CODE_EXAMPLE from "../../code_examples/box.js";
import {Box} from 'zapify-ui';

function BoxDocs() {
  return (
    <div className="article-content">
      <p>
      <b>Zap Box</b> 
      </p>
      <h2>Example</h2>
      <div style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "150px"
      }}>
        <Box color="Primary" p={2} m={2.5} />
        
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

export default BoxDocs;
