import React from "react";
import SideButton from "./matchButtons";
import '../styles/title.css'

function Title(){
    return(
   
    <div className="title">
        <h2>
        How about we...<span className="underline" id="cycleText">WhittleIt?</span>
        </h2>
        <div>
        <SideButton />
        </div>
    </div>
    )
}

export default Title