import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ResistorDraw from "./ResistorDraw";
import { Main, Container } from "./ResistorStyles";
import Answer from "./Answer";

function Resistor(){
    const [numbers, setNumbers] = useState([]);
    const [answer, setAnswer] = useState(null);

    let getRandomBoolean = () => Math.random() < 0.5; 
    let getRandomNumber = () => `${Math.trunc(Math.random()*10)}`;
    let generateNumbers = () => setNumbers([getRandomNumber(), getRandomNumber(), getRandomNumber(), getRandomBoolean() ? getRandomNumber() : null]);
    
    function getValue(){
        if(!numbers[3]) return parseInt(numbers[0] + numbers[1]) * Math.pow(10, parseInt(numbers[2]));
        else return parseInt(numbers[0] + numbers[1] + numbers[2]) * Math.pow(10, parseInt(numbers[3]));
    }

    function reset(){
        setAnswer(null);
        generateNumbers();
        document.querySelector('#value').value = '';
    }

    useEffect(() => {
        generateNumbers();
    }, []);

    return(
        <Main>
            <Link to="/">Regresar</Link>
            <Container>
                <h2 onClick={() => console.log(getValue())}>Calcula el valor de la resistencia</h2>
                <ResistorDraw values={numbers} last={getRandomBoolean()} />
                <input type="number" name="value" id="value" />
                <button onClick={() => {
                    setAnswer(parseInt(document.querySelector('#value').value) == getValue());
                }}>Confirmar</button>

                {
                    (answer == null) ? ( <p> </p> ) : (
                        <>
                        <Answer correct={answer} />
                        <button onClick={() => reset()}>Siguiente..</button>
                        </>
                    )
                }
            </Container>
            <div></div>
        </Main>
    )
}

export default Resistor
