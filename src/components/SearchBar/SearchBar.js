import React, { Component } from 'react';
import './SearchBar.scss';

class SearchBar extends Component {

    // &keywords=search%20text?page=1

    constructor(props) {
        super(props);

        this.search = this.search.bind(this);
        this.handleInputUpdate = this.handleInputUpdate.bind(this);

        this.state = {
            page: props.page,
            error: null,
        }
    }

    handleInputUpdate(event) {
        this.props.updateKeywords( event.target.value );
    }

    search(e) {
        e.preventDefault();
        this.props.fetchData();
    }
    render() {
        return (
            <form className="searchBar" onSubmit={this.search}>
                <input
                    type="text"
                    className="searchBar-input"
                    placeholder="Type here what you are looking for..."
                    value={this.state.keywords}
                    onChange={this.handleInputUpdate}
                />

                <button className="searchBar-button">
                    Search
            </button>
            </form>
        );
    }
}

export default SearchBar;