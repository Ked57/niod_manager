import React from "react";

const A2ADispatcher = props => {
  const data = props.data;
  return (
    <p>
      Detection :
      <ul>
        <li>
          Prefixes
          <ul>
            {data.detection.prefixes.reduce(prefix => `<li>${prefix}</li>`)}
          </ul>
        </li>
        <li>Range : {data.detection.range} m</li>
      </ul>
      Border group name : {data.border.name}
      <br />
      Engage radius : {data.engageRadius} m<br />
      Squadrons :
      <ul>
        {data.squadrons.map(squadron => (
          <li>
            <ul>
              <li>Name : {squadron.name}</li>
              <li>Map : {squadron.map}</li>
              <li>Airbase : {squadron.airbase}</li>
              <li>Group Length : {squadron.groupLength}</li>
              <li>Takeof method : {squadron.takeofMethod}</li>
              <li>Landing method : {squadron.landingMethod}</li>

              {squadron.cap ? (
                <li>
                  <span>Cap :</span>
                  <ul>
                    <li>Zone Name : {squadron.cap.zoneName}</li>
                    <li>Minimum CAP Altitude : {squadron.cap.minCAPAlt}</li>
                    <li>Maximum CAP Altitude : {squadron.cap.maxCAPAlt}</li>
                    <li>Minimum CAP Speed : {squadron.cap.minCAPSpeed}</li>
                    <li>Maximum CAP Speed : {squadron.cap.maxCAPSPeed}</li>
                    <li>
                      Minimum CAP Intercept Speed :{" "}
                      {squadron.cap.minCAPInterceptSpeed}
                    </li>
                    <li>
                      Maximum CAP Intercept Speed :{" "}
                      {squadron.cap.maxCAPInterceptSpeed}
                    </li>
                    <li>Mesure type : {squadron.cap.mesureType}</li>
                    <li>Number Per Ground : {squadron.cap.numberPerGroup}</li>
                    <li>Lower Check Time : {squadron.cap.lowerCheckTime}</li>
                    <li>Upper Check Time : {squadron.cap.upperCheckTime}</li>
                    <li>Decision Weight : {squadron.cap.decisionWeight}</li>
                  </ul>
                </li>
              ) : (
                <li>
                  <span>GCI :</span>
                  <ul>
                    <li>
                      Minimum Intercept Speed : {squadron.gci.minInterceptSpeed}
                    </li>
                    <li>
                      Maximum Intercept Speed : {squadron.gci.maxInterceptSpeed}
                    </li>
                  </ul>
                </li>
              )}
            </ul>
          </li>
        ))}
      </ul>
    </p>
  );
};

export default A2ADispatcher;
