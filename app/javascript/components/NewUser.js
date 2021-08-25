import React from 'react';

const NewUser = () => {
  return (
    <div className="container" style={{ backgroundColor:"lightgrey", border: "1px solid", margin: "40px", padding:"2px 0 25px 25px" }}>
      <h1 style={{textDecoration:"underline"}}>New User Form</h1>
      <a href="/users">Back</a>
      <form action="/users" method="post">
        <p>Name</p>
        <input name="user[name]" />
        <p>Age</p>
        <textarea name="user[age]" />
        <br/>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default NewUser;