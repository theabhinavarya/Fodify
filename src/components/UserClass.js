import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Dummy",
        avatar_url: "dummy",
      },
    };
  }

  async componentDidMount() {
    // api call
    const data = await fetch("https://api.github.com/users/anuj-thakur-513");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });

    console.log("class based: " + json);
  }

  render() {
    const { name, location, avatar_url, twitter_username } =
      this.state.userInfo;

    return (
      <div className="user-card">
        <ul>
          <li><img className="about-img" src="https://i.ibb.co/pXTHhRF/photo-2024-03-24-05-47-09.jpg" /></li>
          <li><h2 className="detail">Name: Abhinav Arya</h2></li>
          <li><h3 className="detail">Location: Muzaffarnager</h3></li>
          <li><h4 className="detail">Contact: theabhinavarya</h4></li>
          <li><h4 className="detail">Mail: theabhinavarya@gmail.com</h4></li>
        </ul>
      </div>
    );
  }
}

export default UserClass;
