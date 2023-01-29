import React, { Component } from "react";


class Done extends Component {

    render() {
        return (
            <div className="Done">
                <div className="Done-Middle">
                    <h2>Ingredients you used up</h2>
                    <hr class="rounded"></hr>
                    
                    {/* <form>
                        <div>
                            <input type="checkbox" id="item1" name="item" value="item1"/>
                            <label for="item1">Item 1</label>
                        </div>
                        <div>
                            <input type="checkbox" id="item2" name="item" value="item2"/>
                            <label for="item2">Item 2</label>
                        </div>
                        <div>
                            <input type="checkbox" id="item3" name="item" value="item3"/>
                            <label for="item3">Item 3</label>
                        </div>
                        <button type="button" onclick="getCheckedItems()">Submit</button>
                    </form>
                    <div id="output"></div> */}
                <div class="container">
                    <div class="notebook">
                        <div class="title">
                            <h1>Grocery List</h1>
                        </div>
                        <div class="input-container">
                            <i class="fa-solid fa-eraser" id="eraser"></i>
                            <input type="text" id="userInput"/>
                        </div>
                        <div id="groceryItems"></div>
                    </div>
                </div>
                <script src="script.js"></script>






                </div>
            </div>
        );
    }
}

export default Done;