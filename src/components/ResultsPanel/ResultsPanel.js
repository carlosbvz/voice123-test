import React, { Component } from 'react';
import ResultsItem from '../ResultsItems/ResultsItems';
import './ResultsPanel.css';

class ResultsPanel extends Component {

    constructor(props) {
        super(props);

        this.state = {
            resultItems: props.resultItems,
            providers: []
        }
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.resultItems.providers) {
            this.setState({
                    providers: nextProps.resultItems.providers,
            })
        }
    }


    render() {
        return (
            <div className="resultsPanel">
                { this.state.providers.map( (provider, i) => {
                    return <ResultsItem provider={provider} key={i} />
                }) }
            </div>
        );
    }
}

export default ResultsPanel;