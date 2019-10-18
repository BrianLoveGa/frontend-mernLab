import React, { Component } from 'react';
import './JokeEdit.css';
// import jokelist from './data/jokelist.json';

export default class JokeEdit extends Component {
	constructor(props) {
		super(props);
		this.state = {
			setup: '',
			punchline: ''
		};
	}
	myChangeHandler = event => {
		let nam = event.target.name;
		let val = event.target.value;
		if (nam === 'punchline') {
		}
		this.setState({ [nam]: val });
	};

	render() {
		// let joke = jokelist.find(joke => joke.id === this.props.match.params.id);

		return (
			<div className="editjk">
				<div className="aboutBox">
					<h2 className="about">
						This is where you edit a joke.
						<br></br>
						This is also where you delete a joke.
					</h2>
				</div>
				<form>
					<p>Joke Set Up:</p>
					<input type="text" name="setup" onChange={this.myChangeHandler} />
					<p>Punch Line:</p>
					<input type="text" name="punchline" onChange={this.myChangeHandler} />
					<br></br>
				
					<button type="submit" >
						Delete it
					</button>


				<h1>Joke preview </h1>
				<br></br>
				<h2>
					Setup : {this.state.setup}
					<br></br>
					Punchline : {this.state.punchline}
				</h2>
				<button type="submit" >
						Submit
					</button>
				</form>
			</div>
		);
	}
}

/// unsucessful attempt at formik libray

// import { Formik } from 'formik';
// import classnames from 'classnames';
// import { render } from 'react-dom';

// const InputFeedback = ({ error }) =>
//   error ? <div className="input-feedback">{error}</div> : null;

// const Label = ({ error, className, children, ...props }) => {
// 	return (
// 	  <label className="label" {...props}>
// 		{children}
// 	  </label>
// 	);
//   };

//   const TextInput = ({ type, id, label, error, value, onChange, className, ...props }) => {
// 	const classes = classnames(
// 	  'input-group',
// 	  {
// 		'animated shake error': !!error,
// 	  },
// 	  className
// 	);
// 	return (

// 	  <div className={classes}>
// 		<Label htmlFor={id} error={error}>
// 		  {label}
// 		</Label>
// 		<input
// 		  id={id}
// 		  className="text-input"
// 		  type={type}
// 		  value={value}
// 		  onChange={onChange}
// 		  {...props}
// 		/>
// 		<InputFeedback error={error} />
// 	  </div>

// 	);
//   };

//   const MyForm = props => {
// 	const {
// 	  values,
// 	  touched,
// 	  errors,
// 	  dirty,
// 	  handleChange,
// 	  handleBlur,
// 	  handleSubmit,
// 	  handleReset,
// 	  isSubmitting,
// 	} = props;
// 	return (
// 		<div>

// 	  <form onSubmit={handleSubmit}>
// 		<TextInput
// 		  id="setup"
// 		  type="text"
// 		  label="Joke Set Up:"
// 		  placeholder="so a guy walks into a bar"
// 		  error={touched.setUp && errors.setUp}
// 		  value={values.setUp}
// 		  onChange={handleChange}
// 		  onBlur={handleBlur}
// 		/>
// 		<TextInput
// 		  id="punchline"
// 		  type="text"
// 		  label="Punch line"
// 		  placeholder="and then Bada-Zing baby"
// 		  error={touched.punchLine && errors.punchLine}
// 		  value={values.punchLine}
// 		  onChange={handleChange}
// 		  onBlur={handleBlur}
// 		/>

// 		<button
// 		  type="button"
// 		  className="outline"
// 		  onClick={handleReset}
// 		  disabled={!dirty || isSubmitting}
// 		>
// 		  Reset
// 		</button>
// 		<button type="submit" disabled={isSubmitting}>
// 		  Submit
// 		</button>

// 	  </form>
// 	  </div>
// 	);
//   };
