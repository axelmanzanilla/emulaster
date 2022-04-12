import React from "react";
import { Picture } from "./PictureStyles";

function PictureComponent(props){
    return(
        <Picture to={props.link}>{props.text}</Picture>
    )
}

export default PictureComponent
