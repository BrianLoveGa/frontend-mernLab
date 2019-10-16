import React, { Component } from 'react';
import './App.css';
import jokelist from '../data/jokelist.json';

export default class Jokeview extends Component {
	render() {
		let joke = jokelist.find(joke => joke.id === this.props.match.params.name);
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
				<a
					className="button"
					href="/jokes/{{id}}/edit"
					rel="noopener noreferrer"
				>
					Edit This Joke{' '}
				</a>
			</div>
		);
	}
}
