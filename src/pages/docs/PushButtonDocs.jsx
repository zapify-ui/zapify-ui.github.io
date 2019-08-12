import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { xonokai } from "react-syntax-highlighter/dist/esm/styles/prism";
import CODE_EXAMPLE from "../../code_examples/pushbutton.js";
import {Button} from 'zapify-ui';

function PushButtonDocs() {
  return (
    <div className="article-content">
      <p>
      <b>Zap Button</b> represents a clickable button.    
       </p>
      <h2>Example</h2>
      <div style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100px"
      }}>
        <Button color="primaryButton"> Zap Button </Button>
        
      </div>
      <h2>Code</h2>
      <SyntaxHighlighter
        language="jsx"
        style={xonokai}
        customStyle={{ width: "50%" }}
      >
        {CODE_EXAMPLE}
      </SyntaxHighlighter>
      {/* <h2>API</h2> */}
      <table style={{ textAlign: "left", width: "95%" }}>
        {/* <tr>
          <th>className</th>
          <th>Type</th>
          <th>Default value</th>
          <th>Description</th>
        </tr>
        
        <tr>
          <td>primaryButton</td>
          
        </tr>
        <tr>
          <td>secondaryButton</td>
        </tr>
        <tr>
          <td>tertiaryButton</td>
          </tr> */}
        
        
      </table>
    </div>
  );
}

export default PushButtonDocs;
