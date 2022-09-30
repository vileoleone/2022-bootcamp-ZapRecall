import LISTFORDECK from "./ListForDeck"
import Flashcards from "./Flashcards"
import FlashcardsAfterButton from "./FlashcardsAfterButton"
import Footer from "./Footer"
import React from "react"
export default function Deck(props) {

    const [buttonClick, buttonClickSet] = React.useState("")
    const [cardIndex, cardIndexSet] = React.useState()
    const [listOfClicked, listOfClickedSet] = React.useState([])
    //const [listOfColors, listOfColorsSet] = React.useState([])
    function closeFlashcard(name, index) {
        changeValueOfButtonCLicked(name)
        addToList(index)
        
    }

    function addToList(index) {
        if (!listOfClicked.includes(listOfClicked)) {
            const newListOfClicked = [...listOfClicked,index]
            listOfClickedSet(newListOfClicked);
            
    }
}
    function changeValueOfButtonCLicked (name) {
        switch (`${name}`) {
            case "green":

                buttonClickSet("green")

                break;
            case "yellow":

                buttonClickSet("yellow")

                break;

            case "red":

                buttonClickSet("red")

                break;
            default:

                break

        }
    }
    

    console.log(listOfClicked)
    
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
                                buttonClick={buttonClick}
                                buttonClickSet={buttonClickSet}
                                cardIndex={cardIndex}
                                cardIndexSet={cardIndexSet}
                            />
                        )
                    }

                    else {
                        return (
                            <FlashcardsAfterButton
                                key={index}
                                index={index}
                                numberOfQuestion={info.card}
                                buttonClick={buttonClick}
                            />
                        )
                    }
                    
                })}
            </main>
            <Footer
                buttonClick={buttonClick}
                buttonClickSet={buttonClickSet}
                closeFlashcard={closeFlashcard}
                cardIndex={cardIndex}
                cardIndexSet={cardIndexSet}
            />
        </>
    )
}