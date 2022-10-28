import React, { useEffect } from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import Posts from "./features/ForumPosts/Posts";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        Phake Phorum
      </header>
      <Posts />
    </div>
  );
}

export default App;
