import React, { Component } from 'react';

export default class App extends Component {
  constructor() {
  	super();

  	this.state = { count: 0 };
  }

  onClickAddOne() {
  	console.log("clicked");
  	const new_count = this.state.count + 1;
  	this.setState({ count: new_count });
  }

  render() {
    return (
      <div>
      	<h1>My awesome app</h1>

      	<h3>Current count: {this.state.count}</h3>

      	<button onClick={this.onClickAddOne.bind(this)}>Add One</button>
      </div>
    );
  }
}
