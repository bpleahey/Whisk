import React, { Component } from "react";
import backbutton from './Back Button.svg';

class Done extends Component {

    render() {
        return (
            <div className="Done">
                <div className="Done-back"></div>
                <div className="Done-Middle">
                    <div className="Done-box"></div>
                    <h2 className="Done-header">Ingredients you used up</h2>
                    <div className="Done-line">
                        <hr class="rounded"></hr>
                    </div>
                    
                    <button class="box-button" >Remove Ingredients</button>
                    <img className="Done-back-button" src={backbutton} alt="back button" />
                </div>
            </div>
        );
    }
}

export default Done;