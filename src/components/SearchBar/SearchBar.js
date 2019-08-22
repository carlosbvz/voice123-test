import React, { Component } from 'react';

class SearchBar extends Component {

    // /?service=voice_over&keywords=search%20text?page=1

    constructor(props) {
        super(props);

        this.search = this.search.bind(this);

        this.state = {
            apiUrl: props.apiUrl,
            page: props.page,
            error: null
        }
    }

    search(e) {
        e.preventDefault();
        console.log('searching...')
        fetch( `${this.state.apiUrl}?page=${this.state.page || 1}` )
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
            <form className="searchForm" onSubmit={this.search}>
                <input
                    type="text"
                    className="searchForm-input"
                    placeholder="Type here what you are looking for..."
                />

                <button className="searchForm-button">
                    Search
            </button>
            </form>
        );
    }
}

export default SearchBar;