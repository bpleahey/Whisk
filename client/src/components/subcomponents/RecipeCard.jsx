import React, { Component } from "react";

class RecipeCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="RecipeCard">
                <div className="RecipeCard-image-wrapper">
                    <img className="RecipeCard-image" src="https://assets.bonappetit.com/photos/5b69f163d3d14670539a2174/4:3/w_3552,h_2664,c_limit/ba-tikka-masala-2.jpg" />
                </div>
                <div className="RecipeCard-content">
                    <h3 className="RecipeCard-name">Chicken Tikka</h3>
                    <div className="RecipeCard-info">
                        <span className="RecipeCard-rating">
                            <span className="RecipeCard-rating-star">☆</span>
                            <span className="RecipeCard-rating-star">☆</span>
                            <span className="RecipeCard-rating-star">☆</span>
                            <span className="RecipeCard-rating-star">☆</span>
                            <span className="RecipeCard-rating-star">☆</span>
                        </span>
                        <span className="RecipeCard-duration">30 mins</span>
                    </div>
                    <button className="RecipeCard-heart">&hearts;</button>
                </div>
            </div>
        );
    }
}

export default RecipeCard;