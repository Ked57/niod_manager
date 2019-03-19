import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const styles = theme => ({
  paperContent: {
    margin: 10
  }
});

const Content = props => {
  const { classes } = props;
  return (
    <Paper>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="flex-start"
        className={classes.paperContent}
      >
        content goes here
      </Grid>
    </Paper>
  );
};

Content.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Content);
