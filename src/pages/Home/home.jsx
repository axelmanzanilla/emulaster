import React from "react";
import Picture from "../../components/Picture/Picture";
import { Main } from "./HomeStyles";

function Home(){
    return(
        <Main>
            <Picture link="/resistor" text="Calcula la resistencia" />
            <Picture link="/resistor" text="Nombre genérico 1" />
            <Picture link="/resistor" text="Nombre genérico 2" />
        </Main>
    )
}

export default Home
