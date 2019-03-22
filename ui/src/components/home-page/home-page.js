import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Prism from "prismjs";
import "../../prism.css";

const styles = theme => ({
  paperContent: {
    margin: 10,
    padding: 10
  }
});

const HomePage = props => {
  const { classes } = props;
  Prism.highlightAll();
  return (
    <Paper className={classes.paperContent}>
      <h1 align="center">Welcome to NIOD Manager</h1>
      <h2>Getting started</h2>
      <h3>Installation</h3>
      <p>
        First you need to install nodejs. Then start a new project with{" "}
        <pre>
          <code className="language-markup">{`npm init`}</code>
        </pre>{" "}
        Then do{" "}
        <pre>
          <code className="language-markup">{`npm install niod`}</code>
        </pre>{" "}
        Then create a file that is named
        <pre>
          <code className="language-markup">{`index.js`}</code>
        </pre>{" "}
        And start coding{" "}
        <pre>
          <code className="language-javascript">
            {`const { initNiod, addA2ADispatcher} = require("niod");
initNiod().then(() => {
    addA2ADispatcher({ 
        //the a2adispatcher arguments
      }, () => console.log("dispatcher created")
    );
});`}
          </code>
        </pre>{" "}
        And of course modify "MissionScripting.lua" file in the DCS installation
        folder <br />
        (C:/Program Files/Eagle Dynamics/Scripts/MissionScripting.lua), replace{" "}
        <pre>
          <code className="language-lua">{`require = nil`}</code>
        </pre>{" "}
        by{" "}
        <pre>
          <code className="language-lua">{`--require = nil`}</code>
        </pre>{" "}
        Download niod.lua from here:{" "}
        <a href="https://github.com/Ked57/NIOD/releases">NIOD releases </a>
      </p>
      <h3>Use NIOD Manager</h3>
      <p>
        You can check that your server is started by checking the server status
        on your right and make sure it's green
      </p>
      <p>
        Then you can click on the burger button on your top left (
        <IconButton
          className={classes.menuButton}
          color="inherit"
          aria-label="Menu"
        >
          <MenuIcon />
        </IconButton>
        ), the "Dashboard" page will let you select a mission file or create
        one. When it's done you'll see a summary of the triggers and
        A2A_Dispatchers you created
      </p>
      <p>
        By clicking again the burger menu or clicking one of the items directly
        you will be able to create and edit triggers and A2A_Dispatchers
      </p>
      <p>
        I hope you have fun with NIOD, report issues at :{" "}
        <a href="https://github.com/ked57/NIOD/issues">issues</a>
      </p>
    </Paper>
  );
};

HomePage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(HomePage);
