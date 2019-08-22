import React, { Component } from 'react';
import './SearchBar.scss';

class SearchBar extends Component {

    // &keywords=search%20text?page=1

    constructor(props) {
        super(props);

        this.search = this.search.bind(this);
        this.handleInputUpdate = this.handleInputUpdate.bind(this);

        this.state = {
            apiUrl: props.apiUrl,
            page: props.page,
            error: null,
            keywords: ''
        }
    }

    handleInputUpdate(event) {
        console.log(event.target.value)
        this.setState({ keywords: event.target.value })
        console.log(this.state.keywords)
    }

    search(e) {
        e.preventDefault();
        fetch( `${this.state.apiUrl}?service=voice_over&keywords=${this.state.keywords}&page=${this.state.page || 1}` )
            .then(res => res.json())
            .then(
                (result) => {
                    this.props.updateResultItems(result);
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