import React, { Component } from "react";
import IngredientsSearch from "./subcomponents/IngredientsSearch";
import MyIngredients from "./subcomponents/MyIngredients";

class Ingredients extends Component {

    render() {
        return (
            <main className="Ingredients">
                <IngredientsSearch />
                <MyIngredients />
            </main>
        );
    }
}

export default Ingredients;