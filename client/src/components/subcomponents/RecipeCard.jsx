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
                    <h3 className="RecipeCard-name">Chicken Tikka Masala</h3>
                    <div className="RecipeCard-info">
                        <span className="Recipe-Card-rating">
                            <span className="Recipe-Card-rating-star">☆</span>
                            <span className="Recipe-Card-rating-star">☆</span>
                            <span className="Recipe-Card-rating-star">☆</span>
                            <span className="Recipe-Card-rating-star">☆</span>
                            <span className="Recipe-Card-rating-star">☆</span>
                        </span>
                        <span className="Recipe-Card-duration">30 mins</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default RecipeCard;