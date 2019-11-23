import React, { Component } from "react";
import ReactDOM from "react-dom";
import AppHeader from "./AppHeader";
import AppContent from "./AppContent";
import AppFooter from "./AppFooter";
import "./index.css";

class App extends Component {
  render() {
    const msg = "Hello world";
    const name = "Saad";
    return (
      <div class="app">
        <AppHeader />
        <AppContent />
        <AppFooter />
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
