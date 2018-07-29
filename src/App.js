import React, { Component } from 'react';
import Map from './Map';
import Chat_Bot from './Chat_Bot';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="map">
          <Map/>
        </div>
        <div className="chatbot">
          <Chat_Bot/>
        </div>
        
      </div>
    );
  }
}

export default App;
