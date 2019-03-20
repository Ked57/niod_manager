import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import "./app.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import TopBar from "../top-bar/top-bar";
import ServerStatus from "../server-status/server-status";
import Footer from "../footer/footer";
import HomePage from "../home-page/home-page";
import Dashboard from "../dashboard/dashboard";
import NoMatch from "../no-match/no-match";

const styles = theme => ({
  root: {
    flexGrow: 1
  }
});

const App = () => {
  return (
    <div className="App">
      <Router>
        <TopBar />
        <Grid container justify="center">
          <Grid item xs={1} />
          <Grid item xs={7}>
            <Switch>
              <Route path="/" exact component={HomePage} />
              <Route path="/dashboard" exact component={Dashboard} />
              <Route component={NoMatch} />
            </Switch>
          </Grid>

          <Grid item xs={1} />
          <Grid item xs={2}>
            <ServerStatus />
          </Grid>
          <Grid item xs={1} />
          <Grid item xs={7}>
            <Footer />
          </Grid>
          <Grid item xs={1} />
          <Grid item xs={2} />
        </Grid>
      </Router>
    </div>
  );
};

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(App);
