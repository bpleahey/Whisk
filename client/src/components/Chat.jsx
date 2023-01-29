import React, { Component } from "react";
import whiskers from './whisker2.svg';
import backbutton from './Back Button.svg';
class Chat extends Component {

    render() {
        return (
            <div className="Chat">
                <div className="Chat-left-side">
                    <img className="Chat-whiskers" src={whiskers} alt="whiskers" />
                    <img className="Chat-back-button" src={backbutton} alt="back button" />
                </div>
                <div className="Chat-right-side">
                    <p className="Chat-text1">Hi, I'm Whiskers!</p>
                    <p className="Chat-text2">How much time do you have?</p>
                    <div className="Chat-right-side-buttons">
                        {/* <label><input type="button" name="duration" value="0"/>0-15 minutes</label> */}
                        <button class="box-button">0-15 minutes</button>
                        <button class="box-button">15-30 minutes</button>
                        <button class="box-button">30-45 minutes</button>
                        <button class="box-button">45-60 minutes</button>
                        <button class="box-button">60-120 minutes</button>
                        <button class="box-button">120+ minutes</button>
                    </div>
                    {/* <script src="script.js"></script> */}
                </div>
            </div>
        );
    }
}

export default Chat;