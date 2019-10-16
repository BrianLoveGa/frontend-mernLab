import React, { Component } from "react";
import listOfJokes from "./data/jokelist.json";
import { Link } from "react-router-dom";

// Dashboard page

class Homeview extends Component {
  render() {
    let jokes = listOfJokes.map(item => {
      return (
        <li>
          {item.setup}{" "}
          <Link to={`/homeview/${item.punchline}`}>{item.punchline}</Link>
        </li>
      );
    });

    return (
      <div>
        <h2>Jokes</h2>
        <ul>{jokes}</ul>
      </div>
    );
  }
}

export default Homeview;
