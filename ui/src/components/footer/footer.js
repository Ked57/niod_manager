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

const Footer = props => {
  const { classes } = props;
  return (
    <Paper className={classes.paperContent}>
      <p className={classes.paragraphContent}>
        Created by <a href="https://github.com/ked57/NIOD">Ked</a>. Report any
        issue <a href="https://github.com/ked57/NIOD/issues">here</a>
      </p>
    </Paper>
  );
};

Footer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Footer);
