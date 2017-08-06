import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import LeagueTableCanvas from './components/LeagueTableCanvas.jsx';

class App extends Component {
  render() {
    return (
      <div>
        <LeagueTableCanvas />
      </div>
      );
  }
}
 
ReactDOM.render(<App />, document.getElementById('leagueTableApp'));