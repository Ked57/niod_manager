import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import RemoveCircleRounded from "@material-ui/icons/RemoveCircleRounded";
import IconButton from "@material-ui/core/IconButton";
import PropTypes from "prop-types";
import { fetch } from "../../../functions/fetcher";
import { withStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  paper: {
    margin: 10,
    padding: 10
  }
});

const A2ADispatcher = props => {
  const name = props.match.params.name;
  const data = fetch("/api/addA2ADispatcher", { name }, true).find(
    element => element.name === name
  ).data;
  const { classes } = props;
  const onButtonAddPrefixClick = () => console.log("add button clicked");
  return (
    <Paper className={classes.paper}>
      Detection
      <List>
        <ListItem>
          <TextField
            id="outlined-range-input"
            label="Add a prefix"
            className={classes.textField}
            margin="normal"
            variant="outlined"
          />
          <Button onClick={onButtonAddPrefixClick}>Add</Button>
        </ListItem>
        <ListItem>
          <List>
            Prefixes
            {data.detection.prefixes.map(prefix => (
              <ListItem>
                <Paper className={classes.paper}>
                  {prefix}{" "}
                  <IconButton
                    color="inherit"
                    aria-label="Higher"
                    onClick={() => console.log(prefix)}
                  >
                    <RemoveCircleRounded />
                  </IconButton>
                </Paper>
              </ListItem>
            ))}
          </List>
        </ListItem>
        <ListItem>
          <TextField
            id="outlined-range-input"
            label="Range (m)"
            className={classes.textField}
            margin="normal"
            variant="outlined"
          >
            {data.detection.range}
          </TextField>{" "}
        </ListItem>
      </List>
      <TextField
        id="outlined-range-input"
        label="Border group name"
        className={classes.textField}
        margin="normal"
        variant="outlined"
      >
        {data.border.name}
      </TextField>
      <br />
      <TextField
        id="outlined-range-input"
        label="Engage radius (m)"
        className={classes.textField}
        margin="normal"
        variant="outlined"
      >
        {data.engageRadius}
      </TextField>
      <br />
      Squadrons :
      <List>
        {data.squadrons.map(squadron => (
          <ListItem>
            <List>
              <ListItem>
                <TextField
                  id="outlined-range-input"
                  label="Name"
                  className={classes.textField}
                  margin="normal"
                  variant="outlined"
                >
                  {squadron.name}
                </TextField>
              </ListItem>
              <ListItem>Map : {squadron.map}</ListItem>
              <ListItem>Airbase : {squadron.airbase}</ListItem>
              <ListItem>Group Length : {squadron.groupLength}</ListItem>
              <ListItem>Takeof method : {squadron.takeofMethod}</ListItem>
              <ListItem>Landing method : {squadron.landingMethod}</ListItem>

              {squadron.cap ? (
                <div>
                  <ListItem>CAP :</ListItem>
                  <ListItem>
                    <List>
                      <ListItem>Zone Name : {squadron.cap.zoneName}</ListItem>
                      <ListItem>
                        Minimum CAP Altitude : {squadron.cap.minCAPAlt}
                      </ListItem>
                      <ListItem>
                        Maximum CAP Altitude : {squadron.cap.maxCAPAlt}
                      </ListItem>
                      <ListItem>
                        Minimum CAP Speed : {squadron.cap.minCAPSpeed}
                      </ListItem>
                      <ListItem>
                        Maximum CAP Speed : {squadron.cap.maxCAPSPeed}
                      </ListItem>
                      <ListItem>
                        Minimum CAP Intercept Speed :{" "}
                        {squadron.cap.minCAPInterceptSpeed}
                      </ListItem>
                      <ListItem>
                        Maximum CAP Intercept Speed :{" "}
                        {squadron.cap.maxCAPInterceptSpeed}
                      </ListItem>
                      <ListItem>
                        Mesure type : {squadron.cap.mesureType}
                      </ListItem>
                      <ListItem>
                        Number Per Ground : {squadron.cap.numberPerGroup}
                      </ListItem>
                      <ListItem>
                        Lower Check Time : {squadron.cap.lowerCheckTime}
                      </ListItem>
                      <ListItem>
                        Upper Check Time : {squadron.cap.upperCheckTime}
                      </ListItem>
                      <ListItem>
                        Decision Weight : {squadron.cap.decisionWeight}
                      </ListItem>
                    </List>
                  </ListItem>
                </div>
              ) : (
                <div>
                  <ListItem>GCI :</ListItem>
                  <ListItem>
                    <List>
                      <ListItem>
                        Minimum Intercept Speed :{" "}
                        {squadron.gci.minInterceptSpeed}
                      </ListItem>
                      <ListItem>
                        Maximum Intercept Speed :{" "}
                        {squadron.gci.maxInterceptSpeed}
                      </ListItem>
                    </List>
                  </ListItem>
                </div>
              )}
            </List>
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

A2ADispatcher.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(A2ADispatcher);
