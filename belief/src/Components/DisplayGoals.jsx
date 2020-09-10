import React from 'react';

const Goals = (props) => {
  const { goal, prior } = props.goal.fields;
  return (
    <div >
      <ul className="display-cont">
        <li><b>{goal}</b></li>
        <li>{prior}</li>
      </ul>
      
      {/* <h4>{goal}</h4>
      <h5>{prior}</h5> */}
    </div>

  )
}

export default Goals;