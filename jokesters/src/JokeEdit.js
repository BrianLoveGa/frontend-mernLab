import React, { Component } from 'react';
import './App.css';
import jokelist from './data/jokelist.json';

export default class JokeEdit extends Component {
	render() {
		let joke = jokelist.find(joke => joke.id === this.props.match.params.id);
		return (
			<div>
				<h2 className="about">
					This is where you edit a joke.
					<br></br>
					This is also where you delete a joke.
				</h2>
				<h3>the Joke premise :<br></br>{joke.setup} </h3>
				
				<h2>Punchline :<br></br>{joke.punchline} </h2>
				
				<h3>
					Click the delete button below to remove a joke once we figure out
					method override for react.
				</h3>
				<form>
					{/* action="/{{ id }}?_method=delete" method="post" */}
					<button> className="delete" type="submit" value="Delete"</button>
				</form>
			</div>
		);
	}
}
