import React, { Component } from 'react';

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
            console.log(nextProps.resultItems.providers)
            this.setState({
                    providers: nextProps.resultItems.providers,
            })
        }
    }


    render() {
        return (
            <div>
                { this.state.providers.map( (provider, i) => {
                    return (
                        <div key={i}>
                            <a target="_blank" rel="noopener noreferrer" href={"https://voice123.com/"+provider.user.username}>{provider.user.name}</a>
                            <img src={provider.user.picture_small} alt=""></img>
                        </div>
                    )
                }) }
            </div>
        );
    }
}

export default ResultsPanel;