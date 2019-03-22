import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Paper from "@material-ui/core/Paper";
import { fetch } from "../../functions/fetcher";
import A2ADispatcher from "../niod-instructions/a2a-dispatcher/a2adispatcher";
import SpawnGroup from "../niod-instructions/spawn-group/spawn-group";
import SpawnGroupInZone from "../niod-instructions/spawn-group-in-zone/spawn-group-in-zone";
import Trigger from "../niod-instructions/trigger/trigger";

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
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>
              {niodInstruction.name}
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              {switchComponent(niodInstruction.type, niodInstruction.data)}
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      ))}
    </Paper>
  );
};

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Dashboard);
