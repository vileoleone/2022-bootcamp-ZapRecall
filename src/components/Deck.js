import almostGood from "../assets/img/icone_quase.png"
import arrow from "../assets/img/seta_play.png"
import bad from "../assets/img/icone_erro.png"
import Flashcards from "./Flashcards"
import FlashcardsAfterButton from "./FlashcardsAfterButton"
import Footer from "./Footer"
import good from "../assets/img/icone_certo.png"
import LISTFORDECK from "./ListForDeck"
import React from "react"

export default function Deck(props) {
    const [cardIndex, cardIndexSet] = React.useState()
    const [listOfClicked, listOfClickedSet] = React.useState([])
    const [listOfColors, listOfColorsSet] = React.useState(new Array(LISTFORDECK.length).fill(""))
    const [count, countSet] = React.useState(0)

    function closeFlashcard(name, index) {
        ValueOfButtonCLicked(name, index);
        addToList(index);
        if(count <LISTFORDECK.length) {
            countSet(count + 1);
        }
        
    }

    function addToList(index) {
        if (!listOfClicked.includes(listOfClicked)) {
            const newListOfClicked = [...listOfClicked, index];
            listOfClickedSet(newListOfClicked);;
        }
    }

    function ValueOfButtonCLicked(name, index) {

        const newListOfColors = [...listOfColors];

        switch (`${name}`) {
            case "green":
                newListOfColors[index] = "green";
                listOfColorsSet(newListOfColors);
                break;

            case "yellow":
                newListOfColors[index] = "yellow";
                listOfColorsSet(newListOfColors);
                break;

            case "red":
                newListOfColors[index] = "red";
                listOfColorsSet(newListOfColors);
                break;
            default:

                break

        }
    }
    return (
        <>
            <main>
                {LISTFORDECK.map((info, index) => {
                    if (!listOfClicked.includes(index)) {
                        return (
                            <Flashcards
                                key={index}
                                index={index}
                                numberOfQuestion={info.card}
                                question={info.FrontQuestion}
                                awnser={info.BackAnwser}
                                cardIndex={cardIndex}
                                cardIndexSet={cardIndexSet}
                            />
                        )
                    }

                    else {
                        if (listOfColors[index] === "") {
                            return (
                                <FlashcardsAfterButton
                                    key={index}
                                    index={index}
                                    numberOfQuestion={info.card}
                                    color="#333333"
                                    icon="seta"
                                >
                                    <img src={arrow} alt="arrow"></img>
                                </FlashcardsAfterButton>
                            )
                        }
                        else if (listOfColors[index] === "green") {
                            return (
                                <FlashcardsAfterButton
                                    key={index}
                                    index={index}
                                    numberOfQuestion={info.card}
                                    color="#2FBE34"
                                    icon="good"
                                >
                                    <img src={good} alt="arrow"></img>
                                </FlashcardsAfterButton>
                            )
                        }
                        else if (listOfColors[index] === "yellow") {
                            return (
                                <FlashcardsAfterButton
                                    key={index}
                                    index={index}
                                    numberOfQuestion={info.card}
                                    color="#FF922E"
                                    icon="almostgood"
                                >
                                    <img src={almostGood} alt="arrow"></img>
                                </FlashcardsAfterButton>
                            )
                        }
                        else {
                            return (
                                <FlashcardsAfterButton
                                    key={index}
                                    index={index}
                                    numberOfQuestion={info.card}
                                    color="#FF3030"
                                    icon="bad"
                                >
                                    <img src={bad} alt="arrow"></img>
                                </FlashcardsAfterButton>
                            )
                        }

                    }

                })}
            </main>
            <Footer
                count={count}
                closeFlashcard={closeFlashcard}
                cardIndex={cardIndex}
                cardIndexSet={cardIndexSet}
                total={LISTFORDECK.length}
            />
        </>
    )
}