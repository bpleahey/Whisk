import React, { Component } from "react";

class Chat extends Component {

    render() {
        return (
            <div className="Chat">
                <div className="Chat-left-side">
                <img className="Chat-whisker" src="img/whiskers-standing.svg" />
                    <div className="Chat-back-button">

                    </div>
                </div>
                <div className="Chat-right-side">
                    <p>Hi, I'm Whiskers!</p>
                    <p>How much time do you have?</p>
                    <button onclick="">
                        0-15 minutes
                    </button>
                    <button onclick="">
                        15-30 minutes
                    </button>
                    <button onclick="">
                        30-45 minutes
                    </button>
                    <button onclick="">
                        45-60 minutes
                    </button>
                    <button onclick="">
                        60-120 minutes
                    </button>
                    <button onclick="">
                        120+ minutes
                    </button>
                </div>
            </div>
        );
    }
}

export default Chat;