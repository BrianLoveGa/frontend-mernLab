import React from 'react';
import { Route, Link, Redirect, Switch } from "react-router-dom";
import './App.css';
import Homeview from './Homeview';
import JokeEdit from './JokeEdit';
import Jokeview from './Jokeview';
import jokelist from '../data/jokelist.json';




export default class APP extends Component {
 
  render() {
    return (
      <div>
        <header className="App-header">Knock Knocks</header>
        <div className="nav">
          <div className="navItem">
            <Link to="/">Jokes</Link>
          </div>
          <div className="navItem">
            <Link to="/jokes/add"></Link>
           
          </div>
        </div>

        <div className="main">
          <Switch>
            <Route
              exact
              path="/jokes"
              component={Homeview}/>
            />
            <Route 
            exact
            path="/jokes/add"
            component={Jokeadd}
            />
            <Route
            exact
            path="/jokes/:id/edit"
            render={(props) => <JokeEdit {...props} jokelist={jokelist}/>}/>
            <Route
            exact
              path="/jokes/:id"
              render={(props) => <Jokeview {...props} jokelist={jokelist} />
              }
              
            />

<Route path="/*" render={() => <Redirect to="/joke" />} />
        
          </Switch>
        </div>
      </div>
    );
  }
}