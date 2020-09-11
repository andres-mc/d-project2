import React from "react";

const Goals = (props) => {
  const { goal, prior } = props.goal.fields;
  return (
    <div>
      <ul className="display-cont">
        <li>
          <b>{goal}</b>
        </li>
        <li>{prior}</li>
      </ul>
    </div>
  );
};

export default Goals;
