// Code EyesOnMe Component Here
import React from "react";

function EyesOnMe() {
    //evenlistener for focus
    const handleFocus = () => {
        console.log('Good!');
    };

    //event listerner for blur
    const handleBlur = () => {
        console.log('Hey! Eyes on me!');
    };

    return (
        <div>
        <button onFocus={handleFocus} onBlur={handleBlur}>Eyes on me</button>
        </div>
    );
}

export default EyesOnMe;