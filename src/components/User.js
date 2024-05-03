import { useEffect, useState } from "react";

const User = (props) => {
  const { name, location, contact } = props;

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    const data = await fetch("https://api.github.com/users/theabhinavarya");
    const json = await data.json();
    console.log("functional component: " + json);
  };

  return (
    <div className="user-card">
      {/* <h2>Name: {name}</h2>
      <h3>Location: {location}</h3>
      <h4>Contact: {contact}</h4> */}
    </div>
  );
};

export default User;
