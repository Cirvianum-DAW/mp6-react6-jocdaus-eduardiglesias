import React from "react";
import Dau from "./Dau";
import "./Dice.css";

const Dice = ({ dice }) => {    
    return(
        <div className="Dice">
            {dice.map((value, index) => 
                <Dau key={index} value={value} />
            )}
        </div>
    )
};

export default Dice;
