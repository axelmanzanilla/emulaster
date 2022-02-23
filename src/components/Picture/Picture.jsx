import React from "react";
import { Picture } from "./PictureStyles";

function PictureComponent(props){
    return(
        <Picture to="/resistor">{props.text}</Picture>
    )
}

export default PictureComponent
