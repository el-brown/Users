import React from 'react';

const User = (props) => {
  return (
    <div style={{ backgroundColor:"lightgrey", border: "1px solid", margin: "40px", padding:"2px 0 25px 25px" }}>
      <h1>{props.user.name}</h1>
      <h3>{props.user.age}</h3>
      <a href={`/users/${props.user.id}/edit`} style={{padding:"5px"}}>Edit</a>
      <a href={`/`}>Back</a>
    </div>
  );
};



export default User;