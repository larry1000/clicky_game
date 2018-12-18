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
          <img src={`${team.image}`} alt={`${team.name}`} width="200" />
        ))}
      </div>
    );
  }
}

export default Teams;
