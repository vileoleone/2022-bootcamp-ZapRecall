import styled from 'styled-components';
import arrow from "../assets/img/seta_play.png"
import turnedArrow from "../assets/img/seta_virar.png"
import React from 'react';


export default function Flashcards(props) {

    const {cardIndexSet, index} = props
    const [clicked, clickedSet] = React.useState(false)
    const [OpenQuestion, OpenQuestionSet] = React.useState(false)
 
    function flashCardClicked(index) {
        clickedSet(true);
        cardIndexSet(index)

    }

    function openQuestionClicked() {
        OpenQuestionSet(true);
    }

        return (
            <>

                <FlashCard data-identifier="flashcard">
                    <PerguntaFechada
                        click={clicked}
                    >
                        <p>{props.numberOfQuestion}</p>
                        <img src={arrow} alt="arrow" onClick={() => flashCardClicked(index)}></img>
                    </PerguntaFechada>
                    <FlashCardInner
                        click={clicked}
                        click2={OpenQuestion}
                    >
                        <PerguntaAbertaBack click2={OpenQuestion} data-identifier="flashcard-answer">
                            <p>{props.awnser}</p>
                        </PerguntaAbertaBack>
                        <PerguntaAbertaFront data-identifier="flashcard-question">
                            <p> {props.question} </p>
                            <img src={turnedArrow} alt="arrow" onClick={openQuestionClicked}></img>
                        </PerguntaAbertaFront>
                    </FlashCardInner>
                </FlashCard>
            </>
        )
}


const PerguntaFechada = styled.div`
    align-items: center;
    background-color: #ffffff;
    border-radius: 5px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    display: ${props => (props.click) ? "none" : "flex"};
    height: 35px;
    justify-content: space-between;
    margin: 12px;
    padding: 15px;
    width: 300px;
    p{
        color: #333333;
        font-family: 'Recursive';
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
        line-height: 19px;
    }
`;

const FlashCard = styled.div`-
    border-box:box-sizing;  
    width: 300px;
    perspective: 1000px;
`;


const FlashCardInner = styled.div`
    display: ${props => (props.click) ? "flex" : "none"};
    min-height: 120px;
    width: 300px;
    position: relative;
    transition: transform 1s ;
    transform-style: preserve-3d;
    margin-bottom: 50px;
    transform: ${props => (props.click2) ? "rotateY(-180deg)" : ""}
    
`

const PerguntaAbertaFront = styled.div`
    backface-visibility: hidden;
    background: #FFFFD5;
    border-radius: 5px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    color: #333333;
    display: flex;
    font-family: 'Recursive';
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    height: 100%;
    justify-content: space-between;
    line-height: 22px;
    position: absolute;
    padding: 15px;
    width: 100%;
    z-index: 2;
    left: 11px;

    img {
        bottom: 10px;
        position: absolute;
        right: 10px;
    }
`;

const PerguntaAbertaBack = styled.div`
    border-box: box-sizing;
    position: absolute;
    display: ${props => (props.click2) ? "flex" : "none"};
    width: 100%;
    height: 100%;
    background: #FFFFD5;
    border-radius: 5px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    color: #333333;
    font-family: 'Recursive';
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
    padding: 15px;
    z-index: 1;
    right: 11px;
    transform: rotateY(180deg);
`;