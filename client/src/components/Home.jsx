import React, { Component } from "react";
import RecipeCard from "./subcomponents/RecipeCard";

class Home extends Component {

    render() {
        return (
            <div className="Recommended">
                <h2 className="Recommended-title">Recommended</h2>
                <div className="Recommended-recipes">
                    <RecipeCard />
                    <RecipeCard />
                    <RecipeCard />
                </div>
            </div>
        );
    }
}

export default Home;