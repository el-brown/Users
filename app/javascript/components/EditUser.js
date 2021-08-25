import React from 'react';

const EditUser = (props) => {
  return (
    <div className="container" style={{ backgroundColor:"lightgrey", border: "1px solid", margin: "40px", padding:"2px 0 25px 25px" }}>
      <h1>Form</h1>
      <a href="/users">Back</a>
      <form action={`/users/${props.user.id}`} method="post">
        <input type="hidden" name="_method" value="patch" />
        <p>Name</p>
        <input defaultValue={props.user.name} name="user[name]" />
        <p>Age</p>
        <textarea defaultValue={props.user.age} name="user[age]" />
        <br />
        <button type="submit">Change</button>
      </form>
    </div>
  );
};

export default EditUser;