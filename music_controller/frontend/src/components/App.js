import React, { Component } from 'react';
// import { render } from 'react-dom';
import { createRoot } from 'react-dom/client';
import HomePage from "./HomePage";

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <HomePage name="Armo"/>
        <div className="test">Test 2</div>
      </div>
    );
  }
}

const appDiv = document.getElementById("app");
const root = createRoot(appDiv)
root.render(<App tab="home" />);
// render(<App />, appDiv);
