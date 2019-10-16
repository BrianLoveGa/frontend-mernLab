import React, { Component } from 'react';
import './App.css';

export default class JokeEdit extends Component {
	render() {
        let joke = jokelist.find(joke => joke.id === this.props.match.params.name);
		return (
			<div>
				<h2 className="about">
					This is where you edit a joke.
					<br></br>
					This is also where you delete a joke.
				</h2>
				<br></br>
				<form>
					<label for="id">joke id</label>
					<input> type="text" name="id" value="Joke id (a number)" </input>
					<label for="setup">Setup for Joke</label>
					<input>type="text" name="setup" value={joke.setup}</input>
					<label for="punchline">Punchline </label>
					<input>
						type="text" name="punchline"value={joke.punchline}
					</input>
					<input> className="button" type="submit" value="Add your joke"</input>
				</form>
				<h3>
				
					Click the delete button below to remove a joke once we figure out
					method override for react.
				</h3>
				<form>
					action="/{{ id }}?_method=delete" method="post"
					<input> className="delete" type="submit" value="Delete"</input>
				</form>
			</div>
		);
	}
}
