import React, { Component } from "react";
import JoinRoomPage from "./JoinRoomPage";
import CreateRoomPage from "./CreateRoomPage";
import { BrowserRouter, Routes, Route, Link, Redirect } from "react-router-dom";

export default class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <BrowserRouter>
          <Routes>
            {/* <Route><p>Home page</p></Route> */}
            <Route exact path="/"/>
            {/* <Route path="/join" element={JoinRoomPage} /> */}
            <Route path="/create" element={CreateRoomPage} />
          </Routes>
        </BrowserRouter>
    );
  }
}
