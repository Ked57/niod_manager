import React from "react";

const SpawnGroupInZone = props => {
  const data = props.data;
  return (
    <div>
      <ul>
        <li>Template : {data.groupName}</li>
        <li>Zone : {data.zoneName}</li>
      </ul>
    </div>
  );
};

export default SpawnGroupInZone;
