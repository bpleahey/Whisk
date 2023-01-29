import React, { Component } from "react";
import whiskers from './whiskers-standing.svg';
import backbutton from './Back Button.svg';
class Chat extends Component {

    render() {
        return (
            <div className="Chat">
                <div className="Chat-left-side">
                    <img className="Chat-whiskers" src={whiskers} alt="whiskers" />
                    <div className="Chat-back-button">
                        <img src={backbutton} alt="back button" />
                    </div>
                </div>
                <div className="Chat-right-side">
                    <p>Hi, I'm Whiskers!</p>
                    <p>How much time do you have?</p>
                    <div className="Chat-right-side-buttons">
                        <button class="box-button">0-15 minutes</button>
                        <button class="box-button">15-30 minutes</button>
                        <button class="box-button">30-45 minutes</button>
                        <button class="box-button">45-60 minutes</button>
                        <button class="box-button">60-120 minutes</button>
                        <button class="box-button">120+ minutes</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Chat;