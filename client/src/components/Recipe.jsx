import React, { Component } from "react";
import whiskerIcon from './Whisker-icon.svg';

class Recipe extends Component {

    render() {
        return (
            <div className="Recipe">
                <div className="Recipe-Top">
                    <img className="Recipe-image" src="https://assets.bonappetit.com/photos/5b69f163d3d14670539a2174/4:3/w_3552,h_2664,c_limit/ba-tikka-masala-2.jpg" />
                    <h2 className="Recipe-name">Chicken Tikka</h2>
                    <div className="Recipe-info">
                        <span className="Recipe-rating">
                            <span className="Recipe-rating-star">☆</span>
                            <span className="Recipe-rating-star">☆</span>
                            <span className="Recipe-rating-star">☆</span>
                            <span className="Recipe-rating-star">☆</span>
                            <span className="Recipe-rating-star">☆</span>
                        </span>
                        <span className="Recipe-duration">30 mins</span>
                        <img className="Recipe-whisker-icon" src={whiskerIcon} alt="whisker icon" />
                        <p className="Recipe-desc">With aromatic golden chicken pieces swimming in an incredible curry sauce, this Chicken Tikka Masala recipe is one of the best you will try!</p>
                    </div>
                </div>
                <div className="Recipe-Bottom">
                    <h2 className="Recipe-IngredientsLabel">Ingredients</h2>
                    <ul className="Recipe-Ingredients">
                        <li>2 shallots, peeled</li>
                        <li>1 ½ pounds boneless skinless chicken </li>
              
                    </ul>
                    
                    <h2 className="Recipe-Instructions-label">Instructions</h2>
                    <ol className="Recipe-Instructions">
                        <li>Blend the shallots, ginger, garlic, and ¼ cup water together in a blender or food processor to create a thick paste. If it’s not coming together, add up to another ¼ cup of water.</li>
                        <li>Toss the chicken with 2 teaspoons kosher salt and 2 teaspoons garam masala.</li>
                        <li>Heat 1 tablespoon of vegetable oil in a large pot or dutch oven over medium-high heat. When the oil is hot, add the chicken and cook for 3 to 5 minutes or until browned. Remove and set aside.</li>
                        <li>Heat the remaining tablespoon of vegetable oil over medium-high heat in the same pot and add the shallot mixture. Cook for 3 minutes, stirring occasionally. Then add the remaining teaspoon of salt, remaining teaspoon garam masala, turmeric, black pepper, and cayenne, and let cook, stirring often, for 1 minute.</li>
            
                    </ol>
                    <button class="box-button" >Finish Recipe</button>
                </div>
                
            </div>
        );
    }
}

export default Recipe;