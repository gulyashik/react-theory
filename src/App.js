import './App.scss';
import React from 'react';
import About from './About/About';
import Cars from "./Cars/Cars";

class App extends React.Component{
  render() {
    return (
        <div className="App">
          <nav className="nav">
            <ul>
              <li>
                <a href="/"> Home </a>
              </li>
              <li>
                <a href="/about"> About </a>
              </li>
            </ul>
          </nav>
        <About/>
        <Cars/>
        </div>
    );
  }
}

export default App;
