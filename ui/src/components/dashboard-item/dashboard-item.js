import React from "react";
import Paper from "@material-ui/core/Paper";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const styles = theme => ({
  paperContent: {
    margin: 10,
    padding: 10
  }
});

const DashboardItem = props => {
  const data = props.data;
  const { classes } = props;

  return (
    <Paper className={classes.paperContent}>
      <a href={`/${data.type}/${data.name}`}>{data.name}</a>
      <ExpandLessIcon />
      <ExpandMoreIcon />
    </Paper>
  );
};

DashboardItem.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(DashboardItem);
