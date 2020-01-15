import React, { Component } from "react";
import NavBar from "./components/NavBar";
import CitySelect from "./components/CitySelect";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar /> 
        <CitySelect />
      </div>
    );
  }
}

export default App;
