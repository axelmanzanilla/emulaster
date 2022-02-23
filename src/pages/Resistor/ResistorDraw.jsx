import React from "react";
import { ResistorContainer, FirstBand, Band, Wire, LeftResistor, CenterResistor, RightResistor } from "./ResistorStyles";

function ResistorDraw(props){
    const colors = {
        '0': 'black',
        '1': 'brown',
        '2': 'red',
        '3': 'orange',
        '4': 'yellow',
        '5': 'green',
        '6': 'blue',
        '7': 'purple',
        '8': 'gray',
        '9': 'white'
    }

    return(
        <ResistorContainer>
            <FirstBand color={colors[props.values[0]]} />
            <Band left={76} color={colors[props.values[1]]} />
            <Band left={92} color={colors[props.values[2]]} />
            {
                props.values[3] ? ( <Band left={108} color={colors[props.values[3]]} /> )
                : ( <></> )
            }
            <Band left={146} color={props.last ? 'gold' : 'silver'} />
            <Wire />
            <LeftResistor />
            <CenterResistor />
            <RightResistor />
            <Wire />
        </ResistorContainer>
    )
}

export default ResistorDraw
