import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { fetch } from "../../functions/fetcher";
import A2ADispatcher from "../niod-instructions/a2a-dispatcher/a2adispatcher";
import SpawnGroup from "../niod-instructions/spawn-group/spawn-group";
import SpawnGroupInZone from "../niod-instructions/spawn-group-in-zone/spawn-group-in-zone";
import Trigger from "../niod-instructions/trigger/trigger";
import DashboardItem from "../dashboard-item/dashboard-item";

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

const switchComponent = (type, args) => {
  const typeComponent = {
    addA2ADispatcher: <A2ADispatcher data={args} />,
    spawnGroup: <SpawnGroup data={args} />,
    spawnGroupInZone: <SpawnGroupInZone data={args} />,
    trigger: <Trigger data={args} />
  };
  return typeComponent[type] ? (
    typeComponent[type]
  ) : (
    <p>Error: Component wasn't found</p>
  );
};

const Dashboard = props => {
  const { classes } = props;
  const niodInstructions = fetch("/api/functions", {}, true);
  return (
    <Paper className={classes.paperContent}>
      {niodInstructions.map(niodInstruction => (
        <DashboardItem
          data={{ type: niodInstruction.type, name: niodInstruction.data.name }}
        />
      ))}
    </Paper>
  );
};

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Dashboard);
