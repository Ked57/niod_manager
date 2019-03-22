import React from "react";

const Trigger = props => {
  const data = props.data;
  return (
    <p>
      <ul>
        <li>Type : {data.type}</li>
        <li>Group : {data.groupName}</li>
        <li>Zone : {data.zoneName}</li>
        <li>Frequency : {data.frequency}</li>
      </ul>
    </p>
  );
};

export default Trigger;
