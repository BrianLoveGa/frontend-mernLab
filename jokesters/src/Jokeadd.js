import React, { Component } from 'react';
import './App.css';

export default class Jokeadd extends Component {
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
					<label for="id">joke id</label>
					<input> type="text" name="id" value="Joke id (a number)" </input>
					<label for="setup">Setup for Joke</label>
					<input>type="text" name="setup" value=" Joke set-up "</input>
					<label for="punchline">Punchline </label>
					<input>
						{' '}
						type="text" name="punchline"value="and the funny punchline"{' '}
					</input>
					<input> class="button" type="submit" value="Add your joke"</input>
				</form>
			</div>
		);
	}
}
