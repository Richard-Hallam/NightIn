import React from "react";
import SideButton from "./matchButtons";

function Title(){
    return(
    <div className="title">
        <h2>
        Time for a... <span className="underline" id="cycleText">NightIn?</span>
        </h2>
        <div>
        <script src="./titleCycle.js"></script>
        <SideButton />
        </div>
    </div>
    )
}

export default Title