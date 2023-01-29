import React, { Component } from "react";
import IngredientsSearch from "./subcomponents/IngredientsSearch";

class Ingredients extends Component {

    render() {
        return (
            <main className="Ingredients">
                <div className="content-wrapper">
                    <h2 className="Ingredients-title">My Ingredients</h2>
                    <IngredientsSearch />
                </div>
            </main>
        );
    }
}

export default Ingredients;