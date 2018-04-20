import React, { Component } from 'react';
import Timer from "./Timer";
import Header from "./Header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Timer/>
        <footer className="footer">
          <div className="container">
            <div className="content has-text-centered">
              <p>
                Developed by <strong>Eduard Ordukhanov</strong>
              </p>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
