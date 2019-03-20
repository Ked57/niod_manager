import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const styles = theme => ({
  paperContent: {
    padding: 10,
    margin: 10
  },
  paragraphContent: {
    "text-align": "center"
  }
});

const NoMatch = props => {
  const { classes } = props;
  return (
    <Paper className={classes.paperContent}>
      <p className={classes.paragraphContent}>Error 404 - page not found</p>
    </Paper>
  );
};

NoMatch.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NoMatch);
