import React from "react";
import {Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { xonokai } from 'react-syntax-highlighter/dist/esm/styles/prism';
import CODE_EXAMPLE from '../code_examples/installation.js';

function Installation() {
  return (
    <div className="app-page">
      <article className="app-article">
        <h1>Getting started</h1>
        <div className="article-content">
          <p>Learn how to install ZapifyUI to your project.</p>
          <h2>Installation</h2>
          <p>You can install ZapifyUI as an npm package:</p>
          <SyntaxHighlighter language="jsx" style={xonokai}>{
            `npm i zapify-ui`
          }
          </SyntaxHighlighter>
          <h2>Basic Usage</h2>
          <p>
            In the following example, you can see how to import{" "}
            <code>Button</code> component and render it with any text.
          </p>
          <SyntaxHighlighter language="jsx" style={xonokai}>{CODE_EXAMPLE}</SyntaxHighlighter>
        </div>
      </article>
    </div>
  );
}

export default Installation;
