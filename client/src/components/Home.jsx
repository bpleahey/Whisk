import React, { Component } from "react";
import Recommended from "./subcomponents/Recommended";

class Home extends Component {

    render() {
        return (
            <main className="Home">
                <Recommended />
            </main>
        );
    }
}

export default Home;