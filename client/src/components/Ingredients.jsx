import React, { Component } from "react";
import IngredientsSearch from "./subcomponents/IngredientsSearch";
import MyIngredients from "./subcomponents/MyIngredients";

class Ingredients extends Component {

    render() {
        return (
            <main className="Ingredients">
                <div className="content-wrapper">
                    <IngredientsSearch />
                    <MyIngredients />
                </div>
            </main>
        );
    }
}

export default Ingredients;