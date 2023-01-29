import React, { Component } from "react";
import Recommended from "./subcomponents/Recommended";

class Home extends Component {

    render() {
        return (
            <div className="Home">
                <Recommended />
            </div>
        );
    }
}

export default Home;