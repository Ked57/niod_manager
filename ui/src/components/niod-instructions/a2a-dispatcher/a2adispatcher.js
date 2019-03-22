import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

const A2ADispatcher = props => {
  const data = props.data;
  return (
    <p>
      Detection :
      <List>
        <ListItem>
          Prefixes
          <List>
            {data.detection.prefixes.reduce(
              prefix => `<ListItem>${prefix}</ListItem>`
            )}
          </List>
        </ListItem>
        <ListItem>Range : {data.detection.range} m</ListItem>
      </List>
      Border group name : {data.border.name}
      <br />
      Engage radius : {data.engageRadius} m<br />
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
                <p>
                  <ListItem>CAP :</ListItem>{" "}
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
                </p>
              ) : (
                <p>
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
                </p>
              )}
            </List>
          </ListItem>
        ))}
      </List>
    </p>
  );
};

export default A2ADispatcher;
