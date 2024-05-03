import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1 className="about-page">About Me</h1>
        <User
          name={"Anuj Thakur"}
          location={"Hamirpur, HP"}
          contact={"@anujthakur05"}
        />
        <UserClass
          name={"Anuj Thakur"}
          location={"Hamirpur, HP"}
          contact={"@anujthakur05"}
        />
      </div>
    );
  }
}

export default About;
