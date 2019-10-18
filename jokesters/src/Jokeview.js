import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './Jokeview.css';
import jokelist from './data/jokelist.json';

export default class Jokeview extends Component {
	render() {
		let joke = jokelist.find(joke => joke.id === this.props.match.params.id);
		return (
			<div>
				<h2 className="about">Here's the funny up close.</h2>
				<br></br>
				<div className="jokeview">
					<h2>Setup</h2>
					<h3>{joke.setup}</h3>
					<br></br>
					<h2>Punchline</h2>
					<h3>{joke.punchline}</h3>
				</div>
				<Link className="red" to={`/jokes/edit/${joke.id}`}>Edit This Joke</Link>
					
				
					
				
			</div>
		);
	}
}
