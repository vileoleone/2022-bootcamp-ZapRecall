import styled from 'styled-components';
import arrow from "../assets/img/seta_play.png"
import React from 'react';


export default function FlashcardsAfterButton(props) {
    const {buttonClick} = props

    const color = buttonClick

        return (
            <>

                <FlashCard>
                    <PerguntaFechadaComBotãoCLicado
                    color = {color}
                    >
                        <p>{props.numberOfQuestion}</p>
                        <img src={arrow} alt="arrow" onClick={() => {console.log(color)}} ></img>
                    </PerguntaFechadaComBotãoCLicado>
                </FlashCard>
            </>
        )
}




const PerguntaFechadaComBotãoCLicado = styled.div`
    align-items: center;
    background-color:${props => (props.color)};
    border-radius: 5px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    display: flex;
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

