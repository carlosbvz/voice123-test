import React, { Component } from 'react';
import './App.scss';
import SearchBar from './components/SearchBar/SearchBar';
import ResultsPanel from './components/ResultsPanel/ResultsPanel';
import ReactPaginate from 'react-paginate';

class App extends Component {

  constructor(props) {
    super(props);
    
    this.state = { 
      apiUrl: 'https://api.sandbox.voice123.com/providers/search',
      keywords: '',
      items: [],
      page: 1
    };

    this.updateResultItems = this.updateResultItems.bind(this);
    this.handlePageClick = this.handlePageClick.bind(this);
    this.fetchData = this.fetchData.bind(this);
    this.updateKeywords = this.updateKeywords.bind(this);
  }

  updateResultItems(resultItems) {
    this.setState({
      items: resultItems
    })
  }
  handlePageClick(page) {
    // this.setState( {page} )
    this.fetchData(page.selected + 1);
  }
  updateKeywords(keywords) {
    this.setState( {keywords} )
  }

  fetchData(pageNumber = 1) {
    fetch( `${this.state.apiUrl}?service=voice_over&keywords=${this.state.keywords}&page=${pageNumber}` )
            .then(res => res.json())
            .then(
                (result) => {
                    this.updateResultItems(result);
                    this.setState({
                        error: null
                    });
                },
                (error) => {
                    // TODO:   Handle error Here
                    this.setState({
                        error
                    });
                }
            )
  }

  render() {
    return (
      <div className="App">
        <SearchBar page={this.state.page} fetchData={this.fetchData} updateKeywords={this.updateKeywords}/>
        <ResultsPanel resultItems={this.state.items} />
        <ReactPaginate className="pagination"
          previousLabel={'previous'}
          nextLabel={'next'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={this.state.pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={this.handlePageClick}
          activeClassName={'active'}
          containerClassName={'pagination'}
          forcePage={this.state.page - 1}
        />
      </div>
    );
  }
}

export default App;
