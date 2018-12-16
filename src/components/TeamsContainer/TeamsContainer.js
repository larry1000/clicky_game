import React, { Component } from "react";
import Navbar from "../Navbar";
import Teams from "../Teams";

class TeamsContainer extends Component {
  state = {
    currentPage: "Home"
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  render() {
    return (
      <div>
        <div>
          <Navbar
            currentPage={this.state.currentPage}
            handlePageChange={this.handlePageChange}
            label="Clicky Game"
          />
        </div>
        <footer>Clicky Game</footer>
        <Teams />
      </div>
    );
  }
}

export default TeamsContainer;
