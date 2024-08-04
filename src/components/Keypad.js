// Code Keypad Component Here
import React from "react";

function Keypad (){
    //event listener
    const handleCHange = () => {
        console.log("Entering password...");
    };
    return (
        <div>
            <input 
            type="password"
             onChange={handleCHange}
            placeholder="Enter your password"
            />
        </div>
    )

}


export default Keypad;