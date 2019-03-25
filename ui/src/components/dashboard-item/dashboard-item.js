import React from "react";
import Paper from "@material-ui/core/Paper";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import IconButton from "@material-ui/core/IconButton";

const styles = theme => ({
  paper: {
    margin: 10,
    padding: 10
  },
  paperContent: {
    display: "flex",
    "justify-content": "space-between"
  },
  link: {
    "text-decoration": "none",
    width: "100%",
    color: "black"
  }
});

const DashboardItem = props => {
  const data = props.data;
  const { classes } = props;

  const higherItem = name => data.moveUp(name);
  const lowerItem = name => data.moveDown(name);

  return (
    <Paper className={classes.paper}>
      <div className={classes.paperContent}>
        <a className={classes.link} href={`/${data.type}/${data.name}`}>
          {data.name}
        </a>
        <div>
          <IconButton
            color="inherit"
            aria-label="Higher"
            onClick={() => higherItem(data.name)}
          >
            <ExpandLessIcon />
          </IconButton>
          <IconButton
            color="inherit"
            aria-label="Lesser"
            onClick={() => lowerItem(data.name)}
          >
            <ExpandMoreIcon />
          </IconButton>
        </div>
      </div>
    </Paper>
  );
};

DashboardItem.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(DashboardItem);
