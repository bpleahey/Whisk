import React, { Component, useState, useEffect } from "react";
import Select from 'react-select';

class IngredientsSearch extends Component {

    constructor(props) {
        super(props);
        this.state = {
            apiResponse: "",
            ingredients: JSON.parse(localStorage.getItem('ingredients')) || [],
            selectedOption: null
        };


        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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

    componentDidUpdate() {
        localStorage.setItem('ingredients', JSON.stringify(this.state.ingredients));
    }

    handleChange = (selectedOption) => {
        this.setState({ selectedOption });
    };

    handleSubmit = (event) => {
        alert("Submitted ingredient " + this.state.selectedOption)
        event.preventDefault();
        const { selectedOption, ingredients } = this.state;
        this.setState({
            ingredients: [...ingredients, { name: selectedOption.value }],
            selectedOption: null,
        });
    };

    render() {
        const { ingredients, selectedOption } = this.state;

        return (
            <div className="IngredientsSearch">
                <form onSubmit={this.handleSubmit} className="IngredientsSearch-box">
                    <Select
                        name={"ingredient"}
                        options={this.state.apiResponse}
                        value={selectedOption}
                        onChange={this.handleChange}
                        placeholder="Select an ingredient"
                    />
                    <button type="submit">Add ingredient</button>
                </form>
                <ul>
                    {ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient.name}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default IngredientsSearch;