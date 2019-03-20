import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

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
        <h1 align="center">Welcome to NIOD Manager</h1>
        <h2>Getting started</h2>
        <p>
          You can check that your server is started by checking the server
          status on your right and make sure it's green
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
          By clicking again the burger menu or clicking one of the items
          directly you will be able to create and edit triggers and
          A2A_Dispatchers
        </p>
        <p>
          I hope you have fun with NIOD, report issues at :{" "}
          <a href="https://github.com/ked57/NIOD/issues">
            https://github.com/ked57/NIOD/issues
          </a>
        </p>
      </Grid>
    </Paper>
  );
};

Content.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Content);
