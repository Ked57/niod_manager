import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const styles = theme => ({
  paperContent: {
    margin: 10,
    padding: 10
  }
});

const Dashboard = props => {
  const { classes } = props;
  return (
    <Paper className={classes.paperContent}>
      <p>A dashboard</p>
    </Paper>
  );
};

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Dashboard);
