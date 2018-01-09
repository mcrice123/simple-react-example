import React, { Component } from 'react';

import UserInput from '../common/UserInput';

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
      <div style={{marginLeft: '20px'}}>
      	<h1 style={{marginTop: '30px'}}>My awesome app</h1>

      	<button onClick={this.onClickAddOne.bind(this)} style={{marginBottom: '10px'}}>Add One</button>


        <UserInput placeholder="Input Box 1" value={this.state.value} onChange={(e) => this.setState({ value: e.target.value})} style={{display: 'block'}} />


        <h1 style={{marginTop: '200px'}}>What's in the state?</h1>
        <h2>Current Count: <span style={{color: 'red'}}>{this.state.count}</span></h2>
        <h2>Input Box 1: <span style={{color: 'red'}}>{this.state.value}</span></h2>



      </div>
    );
  }
}
