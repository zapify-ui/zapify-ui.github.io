import React from "react";
import { Link } from "react-router-dom";
import { Button } from 'zapify-ui';
import Logo from '../assets/ZAPIFY-UI.png';
import "./Home.css";

function Home() {
  return (
    <header className="App-body">
      <img className="App-logo" src={Logo} alt="Zapify" />
      <p className="medium-txt">Zapify-UI is a Blazing fast react UI library with Hooks.</p>
      <div className="btn-container">
        <Link to="/install">
          <Button color="primaryButton" style={{fontStyle:"16px"}}>Installation</Button>
          <Button color="primaryButton" style={{fontStyle:"16px", display:"flex"}}>Docs</Button>
          {/* <PushButton title="Installation" size="large" color="red"
            style={{ fontSize: "16px" }} />
        </Link>
        <Link to="/components/accordion">
          <PushButton title="Docs" size="large" color="red"
            style={{ fontSize: "16px" }} /> */}
        </Link>
      </div>
    </header>
  );
}

export default Home;
