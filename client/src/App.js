import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Car from "./components/Car";


class App extends Component {
  render() {
    return (
      <div className="App">
	      <Router>
		      <div>
			      <Route exact path="/" component={Car} />
		      </div>
	      </Router>
      </div>
    );
  }
}

export default App;
