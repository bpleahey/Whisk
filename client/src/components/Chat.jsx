import React, { Component } from "react";
import whiskers from './whiskers-standing.svg';
import backbutton from './Back Button.svg';
class Chat extends Component {

    render() {
        return (
            <div className="Chat">
                <div className="Chat-left-side">
                <img src={whiskers} alt="whiskers" />
                    <div className="Chat-back-button">
                        <img src={backbutton} alt="back button" />
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