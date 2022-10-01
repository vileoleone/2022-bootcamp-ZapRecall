import styled from "styled-components";

export default function Button(props) {
    const {closeFlashcard, cardIndex} = props;

    return (
        <ContainerButton>
            <RedButton value="red" onClick={(e) => closeFlashcard(e.target.value, cardIndex)}>Não lembrei</RedButton>
            <YellowButton value="yellow" onClick={(e) => closeFlashcard(e.target.value, cardIndex)}> Quase não lembrei</YellowButton>
            <GreenButton value="green" onClick={(e) => closeFlashcard(e.target.value, cardIndex)}>Zap!</GreenButton>
        </ContainerButton>

    )
}

const ContainerButton = styled.div`
        display: flex;
        width: 80%;
        min-height: 10vh;
        justify-content: space-between;
        margin: 10px;
    `;

const GreenButton = styled.button`
        width: 80px;
        height: 40px;
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 700;
        font-size: 12px;
        line-height: 14px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        color: #FFFFFF;
        background: #2FBE34;
        border-radius: 5px;
        padding:5px; 
        cursor: pointer;
        border: 1px #FFFFFF solid;        
        `;

const RedButton = styled.button`
        width: 80px;
        height: 40px;
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 700;
        font-size: 12px;
        line-height: 14px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        color: #FFFFFF;
        background: #FF3030;
        border-radius: 5px;
        padding:5px;  
        cursor: pointer;
        border: 1px #FFFFFF solid;
    `;

const YellowButton = styled.button`
        width: 80px;
        height: 40px;
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 700;
        font-size: 12px;
        line-height: 14px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        color: #FFFFFF;
        background: #FF922E;
        border-radius: 5px;
        padding:5px;
        cursor: pointer;
        border: 1px #FFFFFF solid;
    `;

