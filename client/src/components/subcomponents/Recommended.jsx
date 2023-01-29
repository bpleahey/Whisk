import React, { Component } from "react";
import RecipeCard from "./RecipeCard";

class Recommended extends Component {

    render() {
        return (
            <section className="Recommended">
                <div className="content-wrapper">
                    <h2 className="Recommended-title">Recommended</h2>
                    <div className="Recommended-recipes">
                        <RecipeCard />
                        <RecipeCard />
                        <RecipeCard />
                    </div>
                </div>
            </section>
        );
    }
}

export default Recommended;