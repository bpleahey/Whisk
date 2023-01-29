import React, { Component } from "react";
import Select from 'react-select';

class IngredientsSearch extends Component {

    constructor(props) {
        super(props);
        this.state = { apiResponse: "" };
    }

    callAPI() {
        fetch("http://localhost:9000/ingredients")
            .then(res => res.json())
            .then(res => this.setState({ apiResponse: res })
            .catch(error => console.error(error)));

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