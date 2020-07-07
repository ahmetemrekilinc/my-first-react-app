import React from 'react';
import './App.css';
import MyFunctionalComponent from "./MyFunctionalComponent";
import MyClassComponent from "./MyClassComponent";
import MyDataComponent from "./MyDataComponent";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

function About(){
    return <div>about</div>;
}

function Users(){
    return <div>users</div>;
}

function App() {
  return (
      <Router>
        <div className="App">
          this is my first react app
          <MyFunctionalComponent />
          <MyClassComponent name={"ahmet emre"}  >i'm children</MyClassComponent>
          <MyClassComponent name={"mehmet"}  >aaaa</MyClassComponent>
          <MyDataComponent />
        </div>

          <br/>
          routing operations
          <br/>
          <ul>
              <li><Link to={"/about"} >go to about</Link></li>
              <li><Link to={"/users"} >go to users</Link></li>
          </ul>

          <Route path="/about/" component={About} />
          <Route path="/users/" component={Users} />
    </Router>
  );
}

export default App;
