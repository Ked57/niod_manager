import React, { useState } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import "./app.css";
import Grid from "@material-ui/core/Grid";
import TopBar from "../top-bar/top-bar";
import Menu from "../menu/menu";
import Content from "../content/content";
import ServerStatus from "../server-status/server-status";

const styles = theme => ({
  root: {
    flexGrow: 1
  }
});

const App = props => {
  return (
    <div className="App">
      <TopBar />
      <Grid container spacing={32} justify="center">
        <Grid item xs={7}>
          <Content />
        </Grid>
        <Grid item xs={2}>
          <ServerStatus />
        </Grid>
      </Grid>
    </div>
  );
};

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(App);
