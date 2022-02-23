import React from "react";
import { Correct, Incorrect } from "./ResistorStyles";

function Answer(props){
    return(
        <div>
        {
            props.correct ? ( <Correct>Correcto</Correct> ) : (
                <Incorrect>Incorrecto</Incorrect>
            )
        }
        </div>
    )
}

export default Answer
