import React, { Component, Fragment } from "react";

import "./App.css";
import Header from "./components/Header/header.js";
import Searchterms from "./components/Search/search.js";


class App extends Component {
  render() {
    return (
      

      <div className="App">
        <Header/>
        

        <Searchterms/>
       
        
      </div>
  
    );
  }
}

export default App;
