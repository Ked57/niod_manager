import React, { useState } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import { fetch } from "../../functions/fetcher";

const styles = theme => ({
  paperContent: {
    margin: 10
  },
  dot: {
    height: "15px",
    width: "15px",
    "border-radius": "50%",
    display: "inline-block"
  },
  green: {
    "background-color": "#339933"
  },
  red: {
    "background-color": "#cc3300"
  }
});

const ServerStatus = props => {
  const { classes } = props;
  const [serverStatus, setServerStatus] = useState(
    fetch("/server/status", {}, true)
  );
  return (
    <Paper>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="flex-start"
        className={classes.paperContent}
      >
        <Grid item>
          Server status:{" "}
          {serverStatus.serverOnline ? (
            <span className={[classes.dot, classes.green].join(" ")} />
          ) : (
            <span className={[classes.dot, classes.red].join(" ")} />
          )}
        </Grid>
        <Grid item>Players online: {serverStatus.playersOnline}</Grid>
        <Grid item>Map: {serverStatus.map}</Grid>
        <Grid item>Mission : {serverStatus.missionName}</Grid>
      </Grid>
    </Paper>
  );
};

ServerStatus.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ServerStatus);
