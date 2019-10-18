import React, { Component } from 'react';
import listOfJokes from './data/jokelist.json';
import { Link } from 'react-router-dom';

// Dashboard page

class Homeview extends Component {
	render() {
		let jokes = listOfJokes.map((joke, i) => {
			return (
				<li key={i}>
					{joke.setup} <br></br>
					<Link to={`/jokes/${joke.id}`}>{joke.punchline}</Link>
				</li>
			);
		});

		return (
			<div>
				<h2>Jokes (click the green punchline to edit)</h2>
				<ul>{jokes}</ul>
			</div>
		);
	}
}

export default Homeview;
