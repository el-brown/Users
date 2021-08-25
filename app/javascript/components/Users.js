import React from "react";

const Users = (props) => {
  const { users } = props;
  const renderUser = () => {
    return users.map((user) => {
      return (
        <div key={`user-${user.id}`} style={{ backgroundColor:"lightgrey", border: "1px solid", margin: "40px", padding:"2px 0 25px 25px" }}>
          <h3>{user.name}</h3>
          <h4>{`Age ${user.age}`}</h4>
          <a href={`users/${user.id}`}style={{padding:"5px"}}>Show</a> 
          <a href={`users/${user.id}/edit`}style={{padding:"5px"}}>Edit</a> 
          <a href={`users/${user.id}`} data-method="delete">Delete </a>
        </div>
      );
    });
  };
  return (
    <div style={{margin:"10px 100px 10px 100px" }}>
    <header style={{margin:"20px 0 10px 20px" }}>
    <h1 >Users</h1>
    <a href="/users/new">New User</a>
    </header>
    {renderUser()}</div>
    );
};

// const renderUsers = ()

export default Users;