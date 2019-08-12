import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import PushButtonDocs from './docs/PushButtonDocs';
import BoxDocs from './docs/BoxDocs';
import MediaDocs from './docs/MediaDocs';
import "./Components.css";

// removes "-" and capitalizes each word
function formatTitle(title) {
  title = title.replace(/-/g, " ");
  title = title
    .split(" ")
    .map(s => s.charAt(0).toUpperCase() + s.substring(1))
    .join(" ");

  return title;
}

function getDocFor(componentName) {
  switch (componentName) {
    case 'button':
       return <PushButtonDocs />;
    case 'box':
      return <BoxDocs/>;  
    case 'media':
      return <MediaDocs/>
    
      
   default:
      return (
        <p>
          Documentation for this component is not available at the moment. Sorry{" "}
          <span role="img" aria-label="Sad smiley">
            🙁
          </span>
        </p>
      );
  }
}

function Components(props) {
  let componentName = props.match.params.componentName;
  let doc = getDocFor(componentName);
  componentName = formatTitle(componentName);

  return (
    <div className="app-page">
      <article className="app-article">
        <h1>{componentName}</h1>
        <div className="article-content">{doc}</div>
      </article>
      <Sidebar />
    </div>
  );
}

export default Components;
