import React from "react";
import { useState } from "react";

const UseState = () => {
  const [info, setInfo] = useState({
    name: "",
    email: "",
    password: "",
  });
  const changeddata = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInfo((prev) => {
      return { ...prev, [name]: value };
    });
    console.log(info);
  };
  return (
    <div className="App">
      name{" "}
      <input type="text" name="name" value={info.name} onChange={changeddata} />
      <br />
      email
      <input
        type="text"
        name="email"
        value={info.email}
        onChange={changeddata}
      />
      <br />
      password
      <input
        type="text"
        name="password"
        value={info.password}
        onChange={changeddata}
      />
      <br />
    </div>
  );
};

export default UseState;
