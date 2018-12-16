import React, { Component } from "react";
import Navbar from "../Navbar";
import data from "../../teams.json";

class Teams extends Component {
  state = {
    data
  };

  render() {
    let { data } = this.state;
    return (
      <div>
        {data.map(team => (
          <h1>{team.name}</h1>
        ))}
      </div>
    );
  }
}

export default Teams;
