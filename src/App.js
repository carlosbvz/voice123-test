import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import ResultsPanel from './components/ResultsPanel/ResultsPanel';

class App extends Component {

  constructor(props) {
    super(props);
    
    this.state = { 
      items: [] 
    };

    this.updateResultItems = this.updateResultItems.bind(this);
  }

  updateResultItems(resultItems) {
    this.setState({
      items: resultItems
    })
    console.log('updating items: ', resultItems)
  }

  render() {
    return (
      <div className="App">
        <SearchBar apiUrl='https://api.sandbox.voice123.com/providers/search' updateResultItems={this.updateResultItems}/>
        <ResultsPanel resultItems={this.state.items} />
      </div>
    );
  }
}

export default App;
