import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import LeagueTable from './components/LeagueTable.jsx';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello</h1>
        <LeagueTable />
      </div>
      );
  }
}
 
ReactDOM.render(<App />, document.getElementById('leagueTableApp'));