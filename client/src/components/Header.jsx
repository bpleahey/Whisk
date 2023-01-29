import React, { Component } from "react";

class Header extends Component {

    render() {
        return (
            <header className="Header">
                <div class="content-wrapper">
                    <h1 className="Header-logo"><a href='/'>Whisk</a></h1>
                    <h4 className="Header-ingredients"><a href='/ingredients'>My Ingredients</a></h4>
                </div>
            </header>
        );
    }
}

export default Header;