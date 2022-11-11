import React from "react";
import { useContext } from "react";
import { AppContext } from "./components/UseContext/UserContext";

const Child = () => {
  const userData = useContext(AppContext);
  return (
    <div>
      name is {userData.name} age is {userData.age}
    </div>
  );
};

export default Child;
