import React, { Component } from 'react';
import './ResultsItem.scss';

class ResultsItem extends Component {

    constructor(props) {
        super(props);

        this.state = {
            provider: props.provider
        }
    }


    render() {
        return (
            <div className="resultsItem" >
                <img src={this.state.provider.user.picture_small} alt=""></img>
                <a target="_blank" rel="noopener noreferrer" href={"https://voice123.com/"+this.state.provider.user.username}>{this.state.provider.user.name}</a>
                {/* <p>{this.state.provider.summary}</p> */}
                <audio controls>
                    <source src={this.state.provider.relevant_sample.file} type="audio/mpeg" />
                    Your browser does not support the audio element.
                </audio>
            </div>    
        );
    }
}

export default ResultsItem;