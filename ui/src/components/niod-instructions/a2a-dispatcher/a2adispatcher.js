import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import TextField from "@material-ui/core/TextField";
import PropTypes from "prop-types";
import { fetch } from "../../../functions/fetcher";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  }
});

const A2ADispatcher = props => {
  const name = props.match.params.name;
  console.log(name);
  const data = fetch("/api/addA2ADispatcher", { name }, true).find(
    element => element.name === name
  ).data;
  console.log("data", data);
  const { classes } = props;
  return (
    <div>
      Detection :
      <List>
        <ListItem>
          Prefixes :
          <List>
            {" "}
            {data.detection.prefixes.reduce(
              prefix => `<ListItem>${prefix}</ListItem>`
            )}
          </List>
        </ListItem>
        <ListItem>
          <TextField
            id="outlined-range-input"
            label="Range (m)"
            className={classes.textField}
            autoComplete="current-password"
            margin="normal"
            variant="outlined"
          >
            {data.detection.range}
          </TextField>{" "}
        </ListItem>
      </List>
      Border group name : {data.border.name}
      <br />
      Engage radius : {data.engageRadius} m
      <br />
      Squadrons :
      <List>
        {data.squadrons.map(squadron => (
          <ListItem>
            <List>
              <ListItem>Name : {squadron.name}</ListItem>
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
    </div>
  );
};

A2ADispatcher.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(A2ADispatcher);
