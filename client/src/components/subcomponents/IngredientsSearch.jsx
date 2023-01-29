import React, { Component } from "react";
import Select from 'react-select';

const aquaticCreatures = [
    { label: 'Shark', value: 'Shark' },
    { label: 'Dolphin', value: 'Dolphin' },
    { label: 'Whale', value: 'Whale' },
    { label: 'Octopus', value: 'Octopus' },
    { label: 'Crab', value: 'Crab' },
    { label: 'Lobster', value: 'Lobster' },
];

class IngredientsSearch extends Component {

    constructor(props) {
        super(props);
        this.state = { apiResponse: "" };
    }

    callAPI() {
        fetch("http://localhost:9000/ingredients")
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res }));
    }

    componentWillMount() {
        this.callAPI();
    }

    render() {
        return (
            <div className="IngredientsSearch">
                <div className="IngredientsSearch-box">
                    <Select
                        options={this.state.apiResponse}
                    />
                </div>
            </div>
        );
    }
}

export default IngredientsSearch;