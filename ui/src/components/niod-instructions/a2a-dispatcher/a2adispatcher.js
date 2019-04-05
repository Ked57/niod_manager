import React, { useState } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import RemoveRounded from "@material-ui/icons/RemoveRounded";
import AddRounded from "@material-ui/icons/AddRounded";
import IconButton from "@material-ui/core/IconButton";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import Select from "@material-ui/core/Select";
import { fetch } from "../../../functions/fetcher";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  removeButton: {
    color: "grey"
  },
  selectDiv: {
    "margin-left": 10
  },
  paper: {
    margin: 10,
    padding: 10
  },
  alignRight: {
    display: "flex",
    "justify-content": "flex-end"
  }
});

const A2ADispatcher = props => {
  const name = props.match.params.name;
  const data = fetch("/api/addA2ADispatcher", { name }, true).find(
    element => element.name === name
  ).data;
  const { classes } = props;
  const [forceRerender, setForceRerender] = useState(false);
  const [dispatcherData, setDispatcherData] = useState(data);
  const [addPrefixField, setAddPrefixField] = useState("");
  const onButtonAddPrefixClick = () => {
    if (addPrefixField === "") {
      console.error("Can't add an empty prefix");
      return;
    }
    dispatcherData.detection.prefixes.push(addPrefixField);
    setAddPrefixField("");
  };
  const onButtonRemovePrefixClick = prefix => {
    const indexOfPrefix = dispatcherData.detection.prefixes.indexOf(prefix);
    dispatcherData.detection.prefixes.splice(indexOfPrefix, 1);
    setForceRerender(!forceRerender);
  };
  const onButtonAddSquadronClick = () =>
    console.log("add squadron button clicked");
  const onRemoveSquadronButtonPressed = () =>
    console.log("remove squadron button clicked");
  const onSquadronTypeChange = (e, squadron) => {
    squadron.type = e.target.value;
    if (!squadron[e.target.value]) {
      squadron[e.target.value] = {};
    }
    const dispatcherDataCopy = { ...dispatcherData };
    const sq = dispatcherDataCopy.squadrons.find(
      sq => sq.name === squadron.name
    );
    if (!sq) {
      console.error("Couldn't find selected squadron");
      return;
    }
    Object.assign(sq, squadron);
    setDispatcherData(dispatcherDataCopy);
  };
  return (
    <Paper className={classes.paper}>
      <Typography variant="h4">A2ADispatcher Editor</Typography>
      <Paper className={classes.paper}>
        <Typography variant="h6">Detection</Typography>
        <List>
          <ListItem>
            <TextField
              id="outlined-range-input"
              label="Add a prefix"
              className={classes.textField}
              onChange={e => setAddPrefixField(e.target.value)}
              margin="normal"
              variant="outlined"
            />
            <IconButton aria-label="Higher" onClick={onButtonAddPrefixClick}>
              <AddRounded />
            </IconButton>
          </ListItem>
          <ListItem>
            <List>
              <Typography variant="h6">Prefixes</Typography>
              {dispatcherData.detection.prefixes.map(prefix => (
                <ListItem>
                  <Paper className={classes.paper}>
                    {prefix}{" "}
                    <IconButton
                      aria-label="Higher"
                      onClick={() => onButtonRemovePrefixClick(prefix)}
                    >
                      <RemoveRounded />
                    </IconButton>
                  </Paper>
                </ListItem>
              ))}
            </List>
          </ListItem>
          <ListItem>
            <TextField
              id="outlined-range-input"
              label="Detection range (m)"
              className={classes.textField}
              margin="normal"
              variant="outlined"
              defaultValue={dispatcherData.detection.range}
            />
          </ListItem>
        </List>
      </Paper>
      <Paper className={classes.paper}>
        <List>
          <ListItem>
            <TextField
              id="outlined-range-input"
              label="Border group name"
              className={classes.textField}
              margin="normal"
              variant="outlined"
              defaultValue={dispatcherData.border.name}
            />
          </ListItem>
          <ListItem>
            <TextField
              id="outlined-range-input"
              label="Engage radius (m)"
              className={classes.textField}
              margin="normal"
              variant="outlined"
              defaultValue={dispatcherData.engageRadius}
            />
          </ListItem>
        </List>
      </Paper>
      <Paper className={classes.paper}>
        <Typography variant="h6">
          Squadrons
          <IconButton aria-label="Higher" onClick={onButtonAddSquadronClick}>
            <AddRounded />
          </IconButton>
        </Typography>

        <List>
          {dispatcherData.squadrons.map(squadron => (
            <Paper className={classes.paper}>
              <div className={classes.alignRight}>
                <IconButton
                  aria-label="Higher"
                  onClick={onRemoveSquadronButtonPressed}
                >
                  <RemoveRounded />
                </IconButton>
              </div>
              <ListItem>
                <List>
                  <ListItem>
                    <TextField
                      id="outlined-range-input"
                      label="Name"
                      className={classes.textField}
                      margin="normal"
                      variant="outlined"
                      defaultValue={squadron.name}
                    />
                  </ListItem>
                  <ListItem>
                    <TextField
                      id="outlined-read-only-input"
                      label="Map"
                      defaultValue={squadron.map}
                      className={classes.textField}
                      margin="normal"
                      InputProps={{
                        readOnly: true
                      }}
                      variant="outlined"
                    />
                  </ListItem>
                  <ListItem>
                    <TextField
                      id="outlined-range-input"
                      label="Airbase"
                      className={classes.textField}
                      margin="normal"
                      variant="outlined"
                      defaultValue={squadron.airbase}
                    />
                  </ListItem>
                  <ListItem>
                    <TextField
                      id="outlined-range-input"
                      label="Group Length"
                      className={classes.textField}
                      margin="normal"
                      variant="outlined"
                      defaultValue={squadron.groupLength}
                    />
                  </ListItem>
                  <ListItem>
                    <div className={classes.selectDiv}>
                      <Typography variant="h7">Takeoff Method</Typography>
                      <br />
                      <Select
                        native
                        value={squadron.takeofMethod}
                        //onChange={this.handleChange("age")}
                        inputProps={{
                          name: "Takeoff Method",
                          id: "to-method"
                        }}
                      >
                        <option value={"Air"}>Air</option>
                        <option value={"Runway"}>Runway</option>
                      </Select>
                    </div>
                  </ListItem>
                  <ListItem>
                    <div className={classes.selectDiv}>
                      <Typography variant="h7">Landing Method</Typography>
                      <br />
                      <Select
                        native
                        value={squadron.landingMethod}
                        //onChange={this.handleChange("age")}
                        inputProps={{
                          name: "Landing Method",
                          id: "la-method"
                        }}
                      >
                        <option value={"Air"}>Air</option>
                        <option value={"Runway"}>Runway</option>
                      </Select>
                    </div>
                  </ListItem>
                  <ListItem>
                    <div className={classes.selectDiv}>
                      <Typography variant="h5">Squadron type</Typography>
                      <br />
                      <Select
                        native
                        value={squadron.type}
                        onChange={e => onSquadronTypeChange(e, squadron)}
                        inputProps={{
                          name: "Squadron type",
                          id: "st-method"
                        }}
                      >
                        <option value={"cap"}>CAP</option>
                        <option value={"gci"}>GCI</option>
                      </Select>
                    </div>
                  </ListItem>
                  {squadron.type === "cap" ? (
                    <div>
                      <ListItem>
                        <List>
                          <ListItem>
                            <TextField
                              id="outlined-range-input"
                              label="Zone Name"
                              className={classes.textField}
                              margin="normal"
                              variant="outlined"
                              defaultValue={squadron.cap.zoneName}
                            />
                          </ListItem>
                          <ListItem>
                            <TextField
                              id="outlined-range-input"
                              label="Min CAP Altitude (m)"
                              className={classes.textField}
                              margin="normal"
                              variant="outlined"
                              defaultValue={squadron.cap.minCAPAlt}
                            />
                          </ListItem>
                          <ListItem>
                            <TextField
                              id="outlined-range-input"
                              label="Max CAP Altitude (m)"
                              className={classes.textField}
                              margin="normal"
                              variant="outlined"
                              defaultValue={squadron.cap.maxCAPAlt}
                            />
                          </ListItem>
                          <ListItem>
                            <TextField
                              id="outlined-range-input"
                              label="Min CAP Speed (km/h)"
                              className={classes.textField}
                              margin="normal"
                              variant="outlined"
                              defaultValue={squadron.cap.minCAPSpeed}
                            />
                          </ListItem>
                          <ListItem>
                            <TextField
                              id="outlined-range-input"
                              label="Max CAP Speed (km/h)"
                              className={classes.textField}
                              margin="normal"
                              variant="outlined"
                              defaultValue={squadron.cap.maxCAPSPeed}
                            />
                          </ListItem>
                          <ListItem>
                            <TextField
                              id="outlined-range-input"
                              label="Min CAP Intercept Speed (km/h)"
                              className={classes.textField}
                              margin="normal"
                              variant="outlined"
                              defaultValue={squadron.cap.minCAPInterceptSpeed}
                            />
                          </ListItem>
                          <ListItem>
                            <TextField
                              id="outlined-range-input"
                              label="Max CAP Intercept Speed (km/h)"
                              className={classes.textField}
                              margin="normal"
                              variant="outlined"
                              defaultValue={squadron.cap.maxCAPInterceptSpeed}
                            />
                          </ListItem>
                          <ListItem>
                            <div className={classes.selectDiv}>
                              <Typography variant="h7">Mesure type</Typography>
                              <br />
                              <Select
                                native
                                value={squadron.cap.mesureType}
                                //onChange={this.handleChange("age")}
                                inputProps={{
                                  name: "Landing Method",
                                  id: "la-method"
                                }}
                              >
                                <option value={"RADIO"}>RADIO</option>
                                <option value={"BARO"}>BARO</option>
                              </Select>
                            </div>
                          </ListItem>
                          <ListItem>
                            <TextField
                              id="outlined-range-input"
                              label="Number Per Ground"
                              className={classes.textField}
                              margin="normal"
                              variant="outlined"
                              defaultValue={squadron.cap.numberPerGroup}
                            />
                          </ListItem>
                          <ListItem>
                            <TextField
                              id="outlined-range-input"
                              label="Lower Check Time (s)"
                              className={classes.textField}
                              margin="normal"
                              variant="outlined"
                              defaultValue={squadron.cap.lowerCheckTime}
                            />
                          </ListItem>
                          <ListItem>
                            <TextField
                              id="outlined-range-input"
                              label="Upper Check Time (s)"
                              className={classes.textField}
                              margin="normal"
                              variant="outlined"
                              defaultValue={squadron.cap.upperCheckTime}
                            />
                          </ListItem>
                          <ListItem>
                            <TextField
                              id="outlined-range-input"
                              label="Decision Weight"
                              className={classes.textField}
                              margin="normal"
                              variant="outlined"
                              defaultValue={squadron.cap.decisionWeight}
                            />
                          </ListItem>
                        </List>
                      </ListItem>
                    </div>
                  ) : (
                    <div>
                      <ListItem>
                        <List>
                          <ListItem>
                            <TextField
                              id="outlined-range-input"
                              label="Min Intercept Speed (km/h)"
                              className={classes.textField}
                              margin="normal"
                              variant="outlined"
                              defaultValue={squadron.gci.minInterceptSpeed}
                            />
                          </ListItem>
                          <ListItem>
                            <TextField
                              id="outlined-range-input"
                              label="Max Intercept Speed (km/h)"
                              className={classes.textField}
                              margin="normal"
                              variant="outlined"
                              defaultValue={squadron.gci.maxInterceptSpeed}
                            />
                          </ListItem>
                        </List>
                      </ListItem>
                    </div>
                  )}
                </List>
              </ListItem>
            </Paper>
          ))}
        </List>
      </Paper>
    </Paper>
  );
};

A2ADispatcher.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(A2ADispatcher);
