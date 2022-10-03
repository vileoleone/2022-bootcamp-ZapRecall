import React from "react";
import styled from "styled-components";
import Button from "./Button"
export default function Footer(props) {
    const { cardIndex, closeFlashcard, total, count } = props;

    return (
        <>
            <FooterConcluido>
                <Button
                    closeFlashcard={closeFlashcard}
                    cardIndex={cardIndex}
                />
                <p data-identifier="flashcard-counter" >{count} / {total} CONCLUIDOS</p>
            </FooterConcluido>
        </>
    )
}

const FooterConcluido = styled.div`
    width: 100%;
    min-height: 50px;
    background-color: white;
    position: fixed;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: "Recursive";
    fontstyle: oblique;
    font-weight: 400;
    font-size: 18px;
    color: #333333;
    padding: 5px;

    ContainerButton {

    }

`;