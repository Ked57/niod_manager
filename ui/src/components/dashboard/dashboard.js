import React, { useState } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { fetch } from "../../functions/fetcher";
import DashboardItem from "../dashboard-item/dashboard-item";
import { executeOnMock } from "../../functions/mocker";

const styles = theme => ({
  paperContent: {
    margin: 10,
    padding: 10
  },
  root: {
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  }
});

const Dashboard = props => {
  const { classes } = props;
  const niodInstructions = fetch("/api/functions", {}, true);
  const [rerender, setRerender] = useState(false);
  const moveUp = item => {
    executeOnMock("/api/functions/up", () => {
      for (let i = 0; i < niodInstructions.length; ++i) {
        const instruction = niodInstructions[i];
        if (instruction.name === item) {
          if (i === niodInstructions.length) {
            return;
          }
          const deletedElement1 = niodInstructions.splice(i, 1);
          niodInstructions.splice(i, 0, deletedElement1[0]);
          const deletedElement2 = niodInstructions.splice(i, 1);
          niodInstructions.splice(i - 1, 0, deletedElement2[0]);
          return;
        }
      }
    });
    setRerender(!rerender);
  };
  const moveDown = item => {
    executeOnMock("/api/functions/down", () => {
      for (let i = 0; i < niodInstructions.length; ++i) {
        const instruction = niodInstructions[i];
        let done = false;
        if (!done && instruction.name === item) {
          if (i === niodInstructions.length) {
            return;
          }
          const deletedElement1 = niodInstructions.splice(i, 1);
          niodInstructions.splice(i, 0, deletedElement1[0]);
          const deletedElement2 = niodInstructions.splice(i, 1);
          niodInstructions.splice(i + 1, 0, deletedElement2[0]);
          return;
        }
      }
    });
    setRerender(!rerender);
  };
  return (
    <Paper className={classes.paperContent}>
      {niodInstructions.map(niodInstruction => (
        <DashboardItem
          data={{
            type: niodInstruction.type,
            name: niodInstruction.name,
            moveUp,
            moveDown
          }}
        />
      ))}
    </Paper>
  );
};

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Dashboard);
