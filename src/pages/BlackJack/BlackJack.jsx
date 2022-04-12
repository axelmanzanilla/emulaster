import React, { useState, useEffect } from "react";
import { Main, H2, DivScore, Label, Score, CardsField, Cards, Card, Controls } from "./BlackJackStyles";

function BlackJack(){
    const [cards, setCards] = useState([]);
    const [score, setScore] = useState(0);
    const [rival, setRival] = useState([]);
    const [rivalScore, setRivalScore] = useState(0);

    async function drawACard(){
        let response = await fetch("https://deckofcardsapi.com/api/deck/lnjx2r4ic833/draw/?count=1");
        let cardResponse = await response.json();
        let cardValue = cardResponse.cards[0];

        if(cardValue.value == "ACE") setScore(score + 1);
        else if(cardValue.value == "KING" || 
                cardValue.value == "QUEEN" ||
                cardValue.value == "JACK") setScore(score + 10);
        else setScore(score + parseInt(cardValue.value));

        setCards([...cards, cardValue]);
        IA();
    }

    async function rivalDrawACard(){
        let response = await fetch("https://deckofcardsapi.com/api/deck/lnjx2r4ic833/draw/?count=1");
        let cardResponse = await response.json();
        let cardValue = cardResponse.cards[0];

        if(cardValue.value == "ACE") setRivalScore(score + 1);
        else if(cardValue.value == "KING" || 
                cardValue.value == "QUEEN" ||
                cardValue.value == "JACK") setRivalScore(score + 10);
        else setRivalScore(score + parseInt(cardValue.value));

        setRival([...rival, cardValue]);
    }

    function IA(){
        if(rivalScore < 21){
            if(rivalScore <= 15){
                rivalDrawACard();
            }
        }
    }

    function endGame(){
        IA();
        let win = false;
        if(score <= 21 && rivalScore <= 21){
            if(score > rivalScore) win = true;
        }
        else if(score > 21 && rivalScore > 21){
            if(rivalScore > score) win = true;
        }
        else{
            if(score <= 21) win = true;
        }

        alert(`
        ${win ? "GANASTE" : "PERDISTE"}
        Puntaje: ${score}
        Rival: ${rivalScore}
        `);
    
        setCards([]);
        setScore(0);
        setRival([]);
        setRivalScore(0);
    }

    useEffect(() => {
        drawACard();
        rivalDrawACard();
    }, []);

    return(
        <Main>
            <CardsField>
                <Cards>
                {
                    (cards.length == 0) ? (<></>) : 
                    (
                        cards.map((card, i) =>
                            <Card key={i} left={`${50*i}px`} zindex={`${i}`}>
                                <img src={card.image} width="100px"/>
                            </Card>
                        )
                    )
                }
                </Cards>

                <Cards>
                {
                    (rival.length == 0) ? (<></>) : 
                    (
                        rival.map((card, i) =>
                            <Card key={i} left={`${50*i}px`} zindex={`${i}`}>
                                <img src="https://cutewallpaper.org/24/playing-card-back-png/colorful-d55ec-poker-58f28-card-9a6df-back-680bc-opengameartorg.png" width="100px"/>
                            </Card>
                        )
                    )
                }
                </Cards>
            </CardsField>

            <Controls>
                <DivScore>
                    <Label htmlFor="score">Tu puntaje es:</Label>
                    <Score type="number" name="score" id="score" value={score} readOnly/>
                </DivScore>
                <button onClick={drawACard}>Tomar otra</button>
                <button onClick={endGame}>Finalizar</button>
            </Controls>
        </Main>
    )
}

export default BlackJack
