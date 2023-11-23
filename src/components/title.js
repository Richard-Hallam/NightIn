import React from "react";
import SideButton from "./matchButtons";
import '../styles/title.css'

function Title(){
    return(
   
    <div className="title">
        <h2>
        Time for a... <span className="underline" id="cycleText">NightIn?</span>
        </h2>
        <div>
        <SideButton />
        </div>
    </div>
    )
}

export default Title