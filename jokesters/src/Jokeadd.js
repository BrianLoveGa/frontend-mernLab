import React, { Component } from "react";
import "./App.css";

export default class Jokeadd extends Component {
  constructor() {
    super();
    this.state = {
      setup: "",
      punchline: ""
    };
    this.myChangeHandler = this.myChangeHandler.bind(this);
  }

  myChangeHandler = event => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({ [nam]: val });
  };

  render() {
    return (
      <div>
        <h2 className="about">
          This is a story all about the add a joke page.
          <br></br>
          This is where you add a joke.
          <br></br>
          Not much else about it.
        </h2>
        <br></br>
        <form>
          <p>Setup:</p>
          <input type="text" name="setup" onChange={this.myChangeHandler} />
          <p>Punchline:</p>
          <input type="text" name="punchline" onChange={this.myChangeHandler} />

          <button type="submit">Submit</button>

          {/*<input type="submit" onClick={}*/}
        </form>
        <h1>
          {this.state.setup} ... {this.state.punchline}
        </h1>
      </div>
    );
  }
}
