import styled from "styled-components";
import Button from "./Button"
export default function Footer() {

    return (
        <>
        <FooterConcluido>
                    <Button/>
                    <p>CONCLUIDOS</p>
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
    font-family: 'Recursive';
    font-weight: 400;
    font-size: 18px;
    color: #333333;
    padding: 10px;

    ContainerButton {

    }

`;