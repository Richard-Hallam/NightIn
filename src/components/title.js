import React from "react";
import '../styles/title.css'
import FilterMenu from "./FilterMenu";

function Title(){
    return(
   
    <div className="title">
        <h2>
        Too many to choose? Let's <span className="underline" id="cycleText">WhittleIt!</span>
        </h2>
        <div className="filter-menu">
        <FilterMenu/>
        </div>
    </div>
    )
}

export default Title