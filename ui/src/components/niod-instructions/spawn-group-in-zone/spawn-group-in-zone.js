import React from "react";

const SpawnGroupInZone = props => {
  const data = props.data;
  return (
    <p>
      <ul>
        <li>Template : {data.groupName}</li>
        <li>Zone : {data.zoneName}</li>
      </ul>
    </p>
  );
};

export default SpawnGroupInZone;
